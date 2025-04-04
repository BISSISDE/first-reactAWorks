// // import { useState, useEffect } from "react";
// import axios from "axios";

// // export default function App() {
// //   const [weather, setWeather] = useState([]);
// //   const [error, setError] = useState("");
// //   const [show, setShow] = useState(false);

// //   useEffect(() => {
// //     axios
// //       .get("https://jsonplaceholder.typicode.com/posts")
// //       .then((response) => {
// //         setWeather(response.data);
// //       })
// //       .catch(() => {
// //         setError("Error fetching data");
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <button onClick={() => setShow(!show)}>Bas</button>

// //       {show && (
// //         <>
// //           {weather.slice(0, 5).map((game, index) => (
// //             <p key={index}>{game.title}</p>
// //           ))}
// //           <h1>Aya-rayi: {weather[0]?.title || "Zagruzka..."}</h1>
// //         </>
// //       )}

// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // }

// // import { useState } from "react";

// // export default function OrderForm() {
// //   const [name, setName] = useState("");
// //   const [order, setOrder] = useState("");
// //   const [response, setResponse] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = () => {
// //     setResponse("");
// //     setError("");

// //     axios
// //       .post("https://jsonplaceholder.typicode.com/posts", {
// //         title: name,
// //         body: order,
// //       })
// //       .then((res) => {
// //         setResponse("Тапсырыс қабылданды! ID: " + res.data.id);
// //       })
// //       .catch(() => {
// //         setError("Тапсырыс жетпеді. Қайтадан көріңіз.");
// //       });
// //   };

// //   return (
// //     <div>
// //       <h1>Пиццаға тапсырыс бер!</h1>
// //       <input
// //         type="text"
// //         placeholder="Атыңды жаз"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Қандай пицца керек?"
// //         value={order}
// //         onChange={(e) => setOrder(e.target.value)}
// //       />
// //       <button onClick={handleSubmit}>Жіберу</button>
// //       {response && <p style={{ color: "green" }}>{response}</p>}{" "}
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // }
// import { useState } from "react";
// export default function WeatherApp() {
//   const [joke, setJoke] = useState("");

//   const handleJoke = () => {
//     axios
//       .get("https://official-joke-api.appspot.com/random_joke")
//       .then((res) => setJoke(res.data.setup + " " + res.data.punchline));
//   };
//   return (
//     <div>
//       <button onClick={handleJoke}>Jana joke</button>
//       <p>{joke}</p>
//     </div>
//   );
// }
