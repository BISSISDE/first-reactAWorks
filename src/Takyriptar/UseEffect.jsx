// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [user, setUser] = useState(localStorage.getItem("user") || "");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegist, setisRegist] = useState(!!localStorage.getItem("user"));

//   useEffect(() => {
//     if (isRegist && user !== "Guest") {
//       localStorage.setItem("user", user);
//     }
//   }, [user, isRegist]);

//   const Register = () => {
//     if (user && email && password) {
//       localStorage.setItem("user", user);
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       setisRegist(true);
//     } else {
//       alert("Full all input!");
//     }
//   };

//   const Login = () => {
//     const storedEmail = localStorage.getItem("email");
//     const storedPassword = localStorage.getItem("password");

//     if (email === storedEmail && password === storedPassword) {
//       setUser(localStorage.getItem("user"));
//       setisRegist(true);
//     } else {
//       alert("Undefined!");
//     }
//   };

//   const Logout = () => {
//     setisRegist(false);
//     setUser("");
//   };

//   const DeleteAccount = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//     setisRegist(false);
//     setUser("");
//   };

//   const GuestLogin = () => {
//     setisRegist(true);
//     setUser("Guest");
//   };

//   return (
//     <div className="container">
//       {!isRegist ? (
//         <div>
//           <h1>Registor</h1>
//           <input
//             type="text"
//             onChange={(e) => setUser(e.target.value)}
//             placeholder="Enter your name"
//           />
//           <input
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//           <button onClick={Register}>Registor</button>
//           <h1>Login</h1>
//           <input
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//           />
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//           <button onClick={Login}>Login</button>
//           <button onClick={GuestLogin}>Guest</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Info</h1>
//           <h2> Welecome, {user}!</h2>
//           <button onClick={Logout}>left</button>
//           {user !== "Guest" && (
//             <button onClick={DeleteAccount}>Delate account</button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
