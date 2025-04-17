// import { BrowserRouter , Route , Routes } from "react-router-dom";

// export default function App() {
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route element={<Protect/>}>
//           <Route path="/aiganym" element={<Aiganym/>}/>
//           <Route path="/uldana" element={<Uldana/>}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// function Home() {
//   return <h1>Home Page</h1>
// }

// function Aiganym() {
//   return <h1>Instagram Aiganym</h1>
// }

// function Uldana() {
//   return <h1>Instagram Uldana</h1>
// }

// import { Outlet, Navigate } from "react-router-dom";

// const Protect = () =>{
//   const user = false 

//   return (
//     <div>
//       {user && <Outlet/> || <Navigate to = '/'/>}
//     </div>
//   )
// }

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import { useState } from "react";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/login"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         <Route
//           path="/profile/:username"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// const ProtectedRoute = ({ isAuthenticated, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };
// const Login = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     navigate("/profile/Aiganym");
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// const Profile = () => {
//   const { username } = useParams();

//   return (
//     <div>
//       <h1>Welcome, {username}! 🎉</h1>
//       <p>This is your profile page.</p>
//     </div>
//   );
// };

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import { useState } from "react";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/login"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         <Route
//           path="/dashboard/:userId"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Dashboard setIsAuthenticated={setIsAuthenticated} />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function ProtectedRoute({ isAuthenticated, children }) {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

// function Login({ setIsAuthenticated }) {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     navigate("/dashboard/aiganum");
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// function Dashboard({ setIsAuthenticated }) {
//   const { userId } = useParams();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1>{userId === "admin" ? "Admin Panel" : "User Dashboard"}</h1>
//       <p>Welcome, {userId}!</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default App;

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import { useState, useEffect } from "react";

// const ProtectedRoute = ({ isAuthenticated, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// const Login = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     navigate("/users");
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
//             <strong>{user.name}</strong> - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const UserProfile = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching user:", error));
//   }, [id]);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>
//         <strong>Email:</strong> {user.email}
//       </p>
//       <p>
//         <strong>Phone:</strong> {user.phone}
//       </p>
//       <p>
//         <strong>Company:</strong> {user.company.name}
//       </p>
//       <button onClick={() => navigate("/users")}>Back</button>
//     </div>
//   );
// };

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/login"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         <Route
//           path="/users"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Users />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user/:id"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useParams,
//   useNavigate,
// } from "react-router-dom";
// import "./App.css";

// const fetchProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   return response.json();
// };

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   useEffect(() => {
//     fetchProducts().then(setProducts);
//   }, []);

//   let filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   if (category) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.category === category
//     );
//   }

//   if (sortOrder === "asc") {
//     filteredProducts.sort((a, b) => a.price - b.price);
//   } else {
//     filteredProducts.sort((a, b) => b.price - a.price);
//   }

//   return (
//     <div className="container">
//       <div className="controls">
//         <input
//           type="text"
//           placeholder="Іздеу..."
//           className="input"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           onChange={(e) => setCategory(e.target.value)}
//           className="select"
//         >
//           <option value="">Барлық категориялар</option>
//           <option value="electronics">Electronics</option>
//           <option value="jewelery">Jewelery</option>
//           <option value="men's clothing">Men's Clothing</option>
//           <option value="women's clothing">Women's Clothing</option>
//         </select>
//         <button className="button" onClick={() => setSortOrder("asc")}>
//           Баға: арзан → қымбат
//         </button>
//         <button className="button" onClick={() => setSortOrder("desc")}>
//           Баға: қымбат → арзан
//         </button>
//       </div>
//       <div className="grid">
//         {filteredProducts.map((product) => (
//           <Link to={`/product/${product.id}`} key={product.id} className="card">
//             <img src={product.image} alt={product.title} className="image" />
//             <h3 className="title">{product.title}</h3>
//             <p className="price">{product.price} $</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then(setProduct);
//   }, [id]);

//   if (!product) return <p className="loading">Жүктелуде...</p>;

//   return (
//     <div className="container">
//       <button onClick={() => navigate("/")} className="back-button">
//         Back to Home
//       </button>
//       <div className="product-detail">
//         <img src={product.image} alt={product.title} className="image-large" />
//         <h1 className="title-large">{product.title}</h1>
//         <p className="description">{product.description}</p>
//         <p className="price-large">{product.price} $</p>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FlightProvider } from "./FlightContext";
// import FlightList from "./FlightList";
// import FlightBooking from "./FlightBooking";
// import "./App.css";

// export default function App() {
//   return (
//     <FlightProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<FlightList />} />
//           <Route path="/booking/:flightId" element={<FlightBooking />} />
//         </Routes>
//       </BrowserRouter>
//     </FlightProvider>
//   );
// }

// import React, { useReducer } from "react";
// const initialState = {
//   count: 0,
// };
// function CounterReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count > 0 ? state.count -- : 0 };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [state , dispatch] = useReducer(CounterReducer, initialState);
//   return (
//     <div>
//       <h1>Num: {state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   );
// }