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


import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import "./App.css";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container">
      <div className="controls">
        <input 
          type="text" 
          placeholder="Іздеу..." 
          className="input" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select onChange={(e) => setCategory(e.target.value)} className="select">
          <option value="">Барлық категориялар</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <button className="button" onClick={() => setSortOrder("asc")}>Баға: арзан → қымбат</button>
        <button className="button" onClick={() => setSortOrder("desc")}>Баға: қымбат → арзан</button>
      </div>
      <div className="grid">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="card">
            <img src={product.image} alt={product.title} className="image" />
            <h3 className="title">{product.title}</h3>
            <p className="price">{product.price} $</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => { 
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p className="loading">Жүктелуде...</p>;

  return (
    <div className="container">
      <button onClick={() => navigate("/")} className="back-button">Back to Home</button>
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="image-large" />
        <h1 className="title-large">{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price-large">{product.price} $</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;