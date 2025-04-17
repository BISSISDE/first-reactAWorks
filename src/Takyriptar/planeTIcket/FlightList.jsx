// import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { FlightContext } from "./FlightContext";

// function FlightList() {
//   const [search, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const { flights, setFlights } = useContext(FlightContext);
//   const navigate = useNavigate();

//   const mockFlights = [
//     {
//       id: 1,
//       from: "TOKIO",
//       to: "New York",
//       price: 500,
//       time: "10:00",
//       airline: "Air Fly",
//       seats: 100,
//     },
//     {
//       id: 2,
//       from: "RIO DE JANEIRO",
//       to: "Los Angeles",
//       price: 600,
//       time: "11:00",
//       airline: "Air Qaz",
//       seats: 150,
//     },
//     {
//       id: 3,
//       from: "ALMATY",
//       to: "London",
//       price: 400,
//       time: "12:00",
//       airline: "Air Actana",
//       seats: 200,
//     },
//     {
//       id: 4,
//       from: "LONDON",
//       to: "Tokyo",
//       price: 700,
//       time: "13:00",
//       airline: "Air Qaz",
//       seats: 250,
//     },
//   ];

//   useEffect(() => {
//     const fetchFlights = () => {
//       setTimeout(() => {
//         setFlights(mockFlights);
//         setLoading(false);
//       }, 1000);
//     };

//     fetchFlights();
//   }, [setFlights]);

//   const filteredFlights = flights.filter(
//     (flight) =>
//       flight.from.toLowerCase().includes(search.toLowerCase()) ||
//       flight.to.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1></h1>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Қайдан немесе қайда..."
//       />
//       <div>
//         {filteredFlights.map((flight) => (
//           <div className="flight-card" key={flight.id}>
//             <h2>
//               {flight.from} - {flight.to}
//             </h2>
//             <p>Уақыты: {flight.time}</p>
//             <p>Ушақ: {flight.airline}</p>
//             <p>Бос орындар: {flight.seats}</p>
//             <div>
//               <span>{flight.price.toLocaleString()} KZT</span>
//               <button onClick={() => navigate(`/booking/${flight.id}`)}>
//                 Заказ беру
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FlightList;
