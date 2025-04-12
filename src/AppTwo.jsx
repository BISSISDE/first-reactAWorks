//// 1 task 
// import React, { useState, createContext, useContext } from "react";

// const translations = {
//   kk: {
//     greeting: "Сәлем!",
//     selectLang: "Тіл танда",
//   },
//   ru: {
//     greeting: "Привет!",
//     selectLang: "Выбери язык",
//   },
//   en: {
//     greeting: "Hello!",
//     selectLang: "Select Language",
//   },
// };

// const LanguageContext = createContext();

// const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("kk");

//   const value = {
//     language,
//     setLanguage,
//     t: translations[language],
//   };

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// const useLanguage = () => useContext(LanguageContext);

// const Main = () => {
//   const { language, setLanguage, t } = useLanguage();

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{t.greeting}</h2>
//       <label>
//         {t.selectLang}: &nbsp;
//         <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//           <option value="kk">Қазақша</option>
//           <option value="ru">Русский</option>
//           <option value="en">English</option>
//         </select>
//       </label>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <LanguageProvider>
//       <Main />
//     </LanguageProvider>
//   );
// };

// export default App;

// // 2 task

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (game) => {
//     setCart((prevCart) => [...prevCart, game]);
//   };

//   const removeFromCart = (gameId) => {
//     setCart((prevCart) => prevCart.filter((game) => game.id !== gameId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const games = [
//   { id: 1, name: "Cyberpunk 2077", price: 60 },
//   { id: 2, name: "The Witcher 3", price: 40 },
//   { id: 3, name: "Red Dead Redemption 2", price: 70 },
// ];

// const GameList = () => {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div className="game-list">
//       <h2>Ойындар</h2>
//       {games.map((game) => (
//         <div key={game.id} className="game-item">
//           <h3>{game.name}</h3>
//           <p>Бағасы: ${game.price}</p>
//           <button onClick={() => addToCart(game)}>Корзинаға қосу</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   return (
//     <div className="cart">
//       <h2>Себет</h2>
//       {cart.length === 0 ? (
//         <p>Корзина бос</p>
//       ) : (
//         cart.map((game) => (
//           <div key={game.id} className="cart-item">
//             <h3>{game.name}</h3>
//             <p>Бағасы: ${game.price}</p>
//             <button onClick={() => removeFromCart(game.id)}>Жою</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <CartProvider>
//       <div className="app">
//         <h1>Ойын магазині</h1>
//         <GameList />
//         <Cart />
//       </div>
//     </CartProvider>
//   );
// };

// export default App;

// // 3 task

// import React, { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// const usersData = [
//   { id: 1, name: "Айдар", age: 25 },
//   { id: 2, name: "Бекзат", age: 22 },
//   { id: 3, name: "Сымбат", age: 30},
// ];

// const UsersPage = () => {
//   const [selectedUser, setSelectedUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ users: usersData }}>
//       <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//         {!selectedUser ? (
//           <UserList onSelectUser={setSelectedUser} />
//         ) : (
//           <UserDetail
//             user={selectedUser}
//             onBack={() => setSelectedUser(null)}
//           />
//         )}
//       </div>
//     </UserContext.Provider>
//   );
// };

// const UserList = ({ onSelectUser }) => {
//   const { users } = useContext(UserContext);

//   return (
//     <div>
//       <h2>List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <button
//               style={{
//                 background: "none",
//                 border: "none",
//                 color: "blue",
//                 cursor: "pointer",
//               }}
//               onClick={() => onSelectUser(user)}
//             >
//               {user.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const UserDetail = ({ user, onBack }) => {
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>Жасы: {user.age}</p>
//       <button onClick={onBack}>Артқа</button>
//     </div>
//   );
// };

// export default UsersPage;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FlightProvider } from "./FlightContext";
import FlightList from "./FlightList";
import FlightBooking from "./FlightBooking";
import "./App.css";

export default function App() {
  return (
    <FlightProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlightList />} />
          <Route path="/booking/:flightId" element={<FlightBooking />} />
        </Routes>
      </BrowserRouter>
    </FlightProvider>
  );
}