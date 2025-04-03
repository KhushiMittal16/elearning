import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebaseConfig"; // Import your Firebase auth instance
import { onAuthStateChanged, signOut } from "firebase/auth";

// Create context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleSignOut = () => {
      signOut(auth);
    };

    window.addEventListener("beforeunload", handleSignOut);

    return () => {
      window.removeEventListener("beforeunload", handleSignOut);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
