// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   function handleLogin(e: any) {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user") || "");

//     if (storedUser.email !== email || storedUser.password !== password) {
//       setError("Undefined email or password");
//       return;
//     }
//     setError("");
//     alert("Great");
//   }

//   return (
//     <form onSubmit={handleLogin}>
//       <h1>Login</h1>
//       <label>Email:</label>
//       <input type="text" onChange={(e) => setEmail(e.target.value)} />
//       <label>Password:</label>
//       <input type="password" onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         Dont have an account? <Link to="/register">Register</Link>
//       </p>
//     </form>
//   );
// };

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   function handleRegister(e: any) {
//     e.preventDefault();

//     if (/\d/.test(username)) {
//       setError("Username must contain only strings");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Password and Confirm Password do not match");
//       return;
//     }
//     if (!email.includes("@")) {
//       setError("@no email");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       return;
//     }

//     const user = { username, email, password };
//     localStorage.setItem("user", JSON.stringify(user));
//     setError("");
//     alert("Registered successfully!");
//   }

//   return (
//     <form onSubmit={handleRegister}>
//       <h1>Register</h1>
//       <label>Username:</label>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <label>Email:</label>
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label>Password:</label>
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <label>Confirm Password:</label>
//       <input
//         type="password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       <button type="submit">Register</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         have an account? <Link to="/">Login</Link>
//       </p>
//     </form>
//   );
// };
// const AppTwo = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppTwo;
