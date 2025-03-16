// import { useState, useEffect } from "react";
// import "./App.css";

// export default function App() {
//   // Ex1
//   const [num, setNum] = useState(0);
//   function Plus() {
//     setNum((num) => {
//       if (num >= 10) {
//         alert("You must write a number less than ten");
//         return 0;
//       }
//       return num + 1;
//     });
//   }
//   function Minus() {
//     setNum((num) => num - 1);
//   }
//   // Ex2
//   const [color, setColor] = useState("#ffffff");
//   const [history, setHistory] = useState([]);

//   function getRandomColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }

//   function changeColor() {
//     const newColor = getRandomColor();
//     setColor(newColor);

//     setHistory((prevHistory) => {
//       const updatedHistory = [newColor, ...prevHistory];
//       return updatedHistory.slice(0, 5); // Тек соңғы 5 түсті сақтау
//     });
//   }
//   // Ex3
//   const [text, setText] = useState("");
//   useEffect(() => {
//     const saveText = localStorage.getItem("text", text);
//     if (saveText) {
//       setText(saveText);
//     }
//   });
//   useEffect(() => {
//     localStorage.setItem("text", text);
//   }, [text]);

//   //  Ex4
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   function ListTask(e) {
//     setTask(e.target.value);
//   }

//   function add() {
//     if (task.trim()) {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   }
//   function removeTask(index) {
//     setTasks(tasks.filter((tas, inde) => inde !== index));
//   }
//   //  Ex5
//   const [second, setSecond] = useState("");
//   const [isRunning, setIsRunning] = useState(false);
//   const [timer, setTimer] = useState(null);

//   function StartTimer() {
//     if (Number(second) > 0) {
//       setTimer(Number(second));
//       setIsRunning(true);
//     }
//   }

//   function ToggleTimer() {
//     setIsRunning((time) => !time);
//   }
//   function Clear() {
//     setIsRunning(false);
//     setSecond("");
//     setTimer(null);
//   }
//   useEffect(() => {
//     let time;
//     if (isRunning && timer > 0) {
//       time = setInterval(() => {
//         setTimer((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setIsRunning(false);
//     }

//     return () => clearInterval(time); // Таймерді тазалау
//   }, [isRunning, timer]);
//   return (
//     <div className="container">
//       <div>
//         <button onClick={Plus}>+1</button>
//         <button onClick={Minus}>-1</button>
//         <h3>{num}</h3>
//       </div>
//       <div>
//         <button
//           onClick={changeColor}
//           style={{
//             padding: "10px 20px",
//             fontSize: "18px",
//             cursor: "pointer",
//             borderRadius: "8px",
//             border: "none",
//             backgroundColor: "#222",
//             color: "#fff",
//             marginBottom: "20px",
//           }}
//         >
//           Change Color
//         </button>

//         <h3>Last 5 Colors:</h3>
//         <div>
//           {history.map((col, index) => (
//             <li key={index} style={{ color: col }}>
//               {col}
//             </li>
//           ))}
//         </div>
//         <div
//           className="container"
//           style={{
//             backgroundColor: color,
//             marginLeft: "24%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "background-color 0.5s ease-in-out",
//             width: "100px",
//             marginBottom: "30px",
//           }}
//         ></div>
//       </div>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         />
//         <h2>Text: {text}</h2>
//       </div>
//       <div>
//         <label htmlFor="list" style={{ margin: "15px", marginBottom: "30px" }}>
//           List of Tasks
//         </label>
//         <input type="text" value={task} onChange={ListTask} name="list" id="" />
//         <button onClick={add}>add</button>
//         <ul>
//           {tasks.map((t, index) => (
//             <li key={index}>
//               {t}
//               <button onClick={() => removeTask(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <input
//           onChange={(e) => setSecond(e.target.value)}
//           value={second}
//           type="text"
//         />
//         <button onClick={StartTimer}>Start</button>
//         <button onClick={ToggleTimer}>Rest</button>
//         <button onClick={Clear}>Clear&Stop</button>
//         <p>{timer !== null && timer}</p>
//       </div>
//     </div>
//   );
// }
