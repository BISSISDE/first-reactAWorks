// import { useState , useEffect} from "react";
// import './App.css' 

// export default function App() {
//   // Ex1 
//   const [color, setColor] = useState("");

//   useEffect(() => {
//     const savedColor = localStorage.getItem("color");
//     if (savedColor) {
//       setColor(savedColor);
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("color", color);
//   }, [color]);
//   //Ex2

//   const [username, setUsername] = useState("");
//   useEffect(() => {
//     const savedUsername = localStorage.getItem("username");
//     if (savedUsername) {
//       setUsername(savedUsername);
//     }
//   }, []);

//   useEffect(() => {
//     if (username) {
//       localStorage.setItem("usename", username);
//     }
//   }, [username]);

//   // Ex3 
//   const [volume, setVolume] = useState(
//     Number(localStorage.getItem("volume"))
//   );

//   useEffect(() => {
//     const savedVolume = localStorage.getItem("volume");
//     if (savedVolume) {
//       setVolume(Number(savedVolume));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("volume", volume);
//   }, [volume]);

//   // Ex4 

//   const [seconds, setSeconds] = useState(Number(localStorage.getItem("seconds")) || 0);

//   useEffect(() => {
//     const savedTime = localStorage.getItem("seconds");
//     if (savedTime) {
//       setSeconds(Number(savedTime));
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((num) => {
//         const newTime = num + 1;
//         localStorage.setItem('seconds', newTime);
//         return newTime;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("seconds", seconds);
//   }, [seconds]);
   
//   // Ex5

//   const [currency, setCurrency] = useState(
//     String(localStorage.getItem("currency")));

//   useEffect(() => {
//     const saveCurrency = localStorage.getItem('currency', currency)
//     if (saveCurrency) {
//       setCurrency(saveCurrency)
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('currency' , currency)
//   }, [currency]);
//   return (
//     <div className="container">
//       <div>
//         <h2>Түс таңда:</h2>
//         <button onClick={() => setColor("red")}>🔴 Қызыл</button>
//         <button onClick={() => setColor("blue")}>🔵 Көк</button>
//         <button onClick={() => setColor("green")}>🟢 Жасыл</button>
//       </div>
//       <h1>{color}</h1>
//       <div>
//         <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
//         <input
//           type="text"
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter your name"
//           value={username}
//         />
//         <button onClick={() => setUsername("")}>🚪 Шығу</button>
//       </div>
//       <div>
//         <h2>Sound Level: {volume}</h2>
//         <input
//           type="range"
//           min="100"
//           max="200"
//           onChange={(e) => setVolume(Number(e.target.value))}
//         />
//       </div>
//       <div>
//         <h2>Таймер: {seconds} сек</h2>
//       </div>
//       <div>
//         <h2>Change the valute:</h2>
//         <button onClick={() => setCurrency("USD")}>🔴 USD</button>
//         <button onClick={() => setCurrency("EUR")}>🔵 EUR</button>
//         <button onClick={() => setCurrency("KZT")}>🟢 KZT</button>
//         <h3>{currency}</h3>
//       </div>
//     </div>
//   );
// }