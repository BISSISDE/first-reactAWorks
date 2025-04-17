// import { useState, useEffect } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   Link,
//   useParams,
//   useNavigate,
// } from "react-router-dom";
// import axios from "axios";
// import "./App.css";

// function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//       newErrors.email = "Email kate";
//     }

//     if (password.length < 4) {
//       newErrors.password = "Not enough numbers";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       setIsLoggedIn(true);
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/home");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {errors.auth && <p className="error">{errors.auth}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={errors.email ? "error-input" : ""}
//           />
//           {errors.email && <p className="error-text">{errors.email}</p>}
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={errors.password ? "error-input" : ""}
//           />
//           {errors.password && <p className="error-text">{errors.password}</p>}
//         </div>
//         <button type="submit" className="login-btn">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// function ProtectedRoute({ isLoggedIn, children }) {
//   if (!isLoggedIn) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// }

// function Navigation({ setIsLoggedIn }) {
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-logo">Library</div>
//       <ul className="nav-links">
//         <li>
//           <Link to="/home">Home</Link>
//         </li>
//         <li>
//           <Link to="/books">Books</Link>
//         </li>
//         <li>
//           <button onClick={handleLogout} className="logout-btn">
//             Left
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// function Home() {
//   return (
//     <div className="home">
//       <h1>Welcome, user!</h1>
//       <p>Kitaptar jogaryda ornalaskan</p>
//     </div>
//   );
// }

// function BookGallery() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(
//           `https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books`
//         );
//         setBooks(response.data);
//       } catch (error) {
//         console.error("error with api:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, []);

//   if (loading) return <div className="loading">loaging...</div>;

//   return (
//     <div className="book-gallery">
//       <h2>Books</h2>
//       <div className="books-container">
//         {books.map((book) => (
//           <div key={book.id} className="book-card">
//             <div className="book-image-container">
//               <img src={book.image} alt={book.title} className="book-image" />
//               <div className="overlay">
//                 <Link to={`/book/${book.id}`} className="view-details-btn">
//                   More
//                 </Link>
//               </div>
//             </div>
//             <div className="book-info">
//               <h3>{book.title}</h3>
//               <p className="author">{book.author}</p>
//               <p className="price">{book.price} ₸</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function BookDetails() {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(
//           `https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`
//         );
//         setBook(response.data);
//       } catch (error) {
//         console.error("Error with api:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [id]);

//   if (loading) return <div className="loading">Loading...</div>;
//   if (!book) return <div className="not-found">Undefined</div>;

//   return (
//     <div className="book-details">
//       <h2>{book.title}</h2>
//       <div className="details-container">
//         <img src={book.image} alt={book.title} className="detail-image" />
//         <div className="info">
//           <p>
//             <strong>Title:</strong> {book.title}
//           </p>
//           <p>
//             <strong>Author:</strong> {book.author}
//           </p>
//           <p>
//             <strong>Description:</strong> {book.description}
//           </p>
//           <Link to="/books" className="back-btn">
//             Back to gallery
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loggedIn);
//   }, []);

//   return (
//     <BrowserRouter>
//       {isLoggedIn && <Navigation setIsLoggedIn={setIsLoggedIn} />}
//       <Routes>
//         <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/books"
//           element={
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <BookGallery />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/book/:id"
//           element={
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <BookDetails />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
