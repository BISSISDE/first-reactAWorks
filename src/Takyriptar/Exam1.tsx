// // import { useState, useEffect } from "react";

// // function App() {
// //   const [user, setUser] = useState(null);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isRegist, setisRegist] = useState(false);

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //       setisRegist(true);
// //     }
// //   }, []);

// //   const Register = () => {
// //     if (!name || !email || !password) return alert("Барлық өрісті толтырыңыз");
// //     const newUser = { name, email, password };
// //     localStorage.setItem("user", JSON.stringify(newUser));
// //     setUser(newUser);
// //     setisRegist(true);
// //   };

// //   const Login = () => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     if (
// //       storedUser &&
// //       storedUser.email === email &&
// //       storedUser.password === password
// //     ) {
// //       setUser(storedUser);
// //       setisRegist(true);
// //     } else {
// //       alert("Қате email немесе пароль");
// //     }
// //   };

// //   const Logout = () => {
// //     setUser(null);
// //     setisRegist(false);
// //   };

// //   const DeleteAccount = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //     setisRegist(false);
// //   };

// //   const GuestLogin = () => {
// //     setUser({ name: "Guest" });
// //     setisRegist(true);
// //   };

// //   return (
// //     <div className="container">
// //       {!isRegist ? (
// //         <div>
// //           <h2>Тіркелу</h2>
// //           <input
// //             type="text"
// //             placeholder="Аты"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Пароль"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <button onClick={Register}>Тіркелу</button>
// //           <h2>Кіру</h2>
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Пароль"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <button onClick={Login}>Кіру</button>
// //           <button onClick={GuestLogin}>Қонақ ретінде кіру</button>
// //         </div>
// //       ) : (
// //         <div>
// //           <h2>Сәлем, {user.name}!</h2>
// //           <button onClick={Logout}>Шығу</button>
// //           <button onClick={DeleteAccount}>Аккаунтты жою</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;

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
