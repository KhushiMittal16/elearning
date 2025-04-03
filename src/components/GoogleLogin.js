import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut } from "./firebaseConfig";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Google Sign-in
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      // const user = result.user;

      if (user) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Google Sign-out
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt="User Avatar" width="50" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleLogin;
