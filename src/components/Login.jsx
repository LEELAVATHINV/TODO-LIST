import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  // Function to validate password (only 4-digit numbers)
  const isValidPassword = (password) => {
    return /^[0-9]{4}$/.test(password);
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    if (!isValidPassword(password)) {
      alert("Password must be exactly 4 digits and contain only numbers!");
      return;
    }

    // If both email and password are valid, login the user
    onLogin();
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter 4-digit Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        maxLength={4} // Ensures max 4 characters can be entered
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
