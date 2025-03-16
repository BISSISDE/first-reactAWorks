// import { useState, useEffect, useRef } from "react";
// import "./App.css";
// function App() {
//   function FirstTask(role: any) {
//     return (
//       <div className="parahrap">
//         <h1>Task1</h1>
//         <p>{role.admin}</p>
//         <p>{role.user}</p>
//         <p>{role.guest}</p>
//       </div>
//     );
//   }
// function SecondTask() {
//   const [temp, setTemp] = useState(null);
//   const [message, setMessage] = useState({ text: "", className: "" });
//   const promptRef = useRef(false);

//   useEffect(() => {
//     if (!promptRef.current) {
//       promptRef.current = true;
//       setTimeout(() => {
//         let tempValue = prompt("Enter Temp");
//         let TEMP = Number(tempValue);

//         if (!isNaN(TEMP)) {
//           setTemp(TEMP);
//         }
//       }, 2000);
//     }
//   }, []);

//   useEffect(() => {
//     if (temp !== null) {
//       if (temp > 40) {
//         setMessage({ text: "Very Hot", className: "veryhot" });
//       } else if (temp >= 30 && temp <= 40) {
//         setMessage({ text: "Hot", className: "hot" });
//       } else if (temp >= 15 && temp <= 29) {
//         setMessage({ text: "Normal", className: "normal" });
//       } else if (temp >= 0 && temp <= 14) {
//         setMessage({ text: "Cold", className: "cold" });
//       } else {
//         setMessage({ text: "Very Cold", className: "verycold" });
//       }
//     }
//   }, [temp]);

//   return (
//     <div className="temps">
//       {message.text && <p className={message.className}>{message.text}</p>}
//     </div>
//   );
// }
//   function ThirdTask() {
//     const isSubscribed = true;

//     return (
//       <div>
//         <p>
//           {(isSubscribed && <p className="Premium">Premium</p>) || (
//             <p className="Normal">Nolmal</p>
//           )}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <FirstTask admin="Admin" user="User" guest="Guest" />
//       <SecondTask />
//       <ThirdTask/>
//     </div>
//   );
// }

// export default App;
