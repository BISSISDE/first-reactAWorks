// import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/profile/:username" element={<UserProfile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function UserProfile() {
//   const { username } = useParams();
//   return <h1>Welcome, {username}!</h1>;
// }

// export default App;

// import { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useParams,
// } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// import { useEffect, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useParams,
// } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setProduct(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   return (
//     <div>
//       <h1>Name ${product.title}</h1>
//       <p>Description: ${product.description}</p>
//       <p>Price: ${product.price}</p>
//       <img src={product.image} />
//     </div>
//   );
// }

// export default App;

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/surprise" element={<Surprise />} />
//       </Routes>
//     </Router>
//   );
// }

// function Home() {
//   return <h1>🏠 Home Page</h1>;
// }
// function Profile() {
//   return <h1>👤 Profile Page</h1>;
// }
// function Posts() {
//   return <h1>📝 Posts Page</h1>;
// }
// function About() {
//   return <h1>ℹ️ About Page</h1>;
// }

// function Surprise() {
//   const navigate = useNavigate();
//   const pages = ["/", "/profile", "/posts", "/about"];

//   const goToRandomPage = () => {
//     const randomPage = pages[Math.floor(Math.random() * pages.length)];
//     navigate(randomPage);
//   };

//   return (
//     <div>
//       <h1>🎉 Surprise Page!</h1>
//       <button onClick={goToRandomPage}>Surprise Me!</button>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/posts" element={<PostList />} />
//         <Route path="/posts/:id" element={<PostDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//       .then((res) => res.json())
//       .then((data) => setPosts(data));
//   }, []);

//   return (
//     <div>
//       <h1>📢 Blog Posts</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body.substring(0, 50)}...</p>
//           <Link to={`/posts/${post.id}`}>Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// function PostDetail() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => res.json())
//       .then((data) => setPost(data));
//   }, [id]);

//   if (!post) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// export default App;
