import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import auth context

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // Prevents flashing before auth check

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;