import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut } from "./firebaseConfig";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="all: 'unset' w-full h-1.5 flex justify-center">
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt="User Avatar" width="50" />
          <div>{console.log(user)}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <div>
            {/* <LoginPage /> */}
            <form
              onSubmit={handleLogin}
              className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

              <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-700 mb-2">
                  User name
                </label>
                <input
                  id="userName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter user name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
              >
                Login
              </button>
              <button
                onClick={handleLogin}
                className="mt-2 p-2 border rounded-lg w-full font-medium tex"
              >
                <i className="fa-brands fa-google to-blue-400"></i> Sign in with
                Google
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleLogin;
