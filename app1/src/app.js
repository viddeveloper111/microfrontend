// src/App.js
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">MyApp</div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
      </nav>

      <div className="auth-section">
        {isLoggedIn ? (
          <>
            <FaUserCircle className="profile-icon" />
            <button onClick={handleAuth} className="logout-btn">Logout</button>
          </>
        ) : (
          <button onClick={handleAuth} className="login-btn">Login</button>
        )}
      </div>
    </header>
  );
};

export default App;
