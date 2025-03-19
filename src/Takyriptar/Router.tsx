// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
// } from "react-router-dom";
// import App from "./App";

// export default function AppRouter() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/app" element={<App />} />
//         <Route path="/next" element={<NextVideo />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/about">About</Link> {"  |  "}
//       <Link to="/contact">Contact</Link> {" | "}
//       <Link to="https://www.ted.com/">ted</Link> {" | "}
//       <a href="https://www.ted.com/" target="_blank">
//         a_Ted
//       </a>
//     </nav>
//   );
// }

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={() => navigate("next")}>NextVideo</button>
//       <button onClick={() => navigate(-1)}>Back</button>
//       <button onClick={() => navigate(1)}>Forward</button>
//     </div>
//   );
// }
// function NextVideo() {
//   return <h1>NextVideo Page</h1>;
// }

// function NotFound() {
//   return <h1>404 Not found</h1>;
// }

// function About() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1>About Page</h1>
//       <button onClick={() => navigate(1)}>Forward</button>
//     </div>
//   );
// }
// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// import { useState, useEffect } from "react";

// function App() {
//   const [theme, setTheme] = useState("white");

//   useEffect(() => {
//     localStorage.setItem('theme' , theme)
//   }, []);

//   const toggleTheme = () => {
//     setTheme(e => e == "white" && "black" || "white")
//   };

//   return (
//     <nav style={{ backgroundColor: theme, padding: "10px" }}>
//       <button onClick={toggleTheme}>Түсін өзгерту</button>
//     </nav>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// function About() {
//   const [favorites, setFavorites] = useState(() => {
//     const savedFavorites = localStorage.getItem("favorites");
//     return savedFavorites && JSON.parse(savedFavorites) || [];
//   });

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const addToFavorites = () => {
//     const newFavorites = [...favorites, "About"];
//     setFavorites(newFavorites);
//   };

//   return (
//     <div>
//       <h1>About Us</h1>
//       <button onClick={addToFavorites}>My favorate page</button>
//     </div>
//   );
// }

// export default About;

// import { useNavigate } from "react-router-dom";

// function App() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Page Not Found</h1>
//       <button onClick={() => navigate(-1)}>Go Back</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Quiz() {
//   const question = "React деген не?";
//   const options = ["Framework", "Library", "Programming language"];
//   const correctAnswer = "Library";

//   const [message, setMessage] = useState("");

//   const checkAnswer = (answer) => {
//     if (answer === correctAnswer) {
//       setMessage("Дұрс");
//     } else {
//       setMessage("Қате");
//     }
//   };

//   return (
//     <div>
//       <h1>{question}</h1>
//       {options.map((option, index) => (
//         <button key={index} onClick={() => checkAnswer(option)}>
//           {option}
//         </button>
//       ))}
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Quiz;
