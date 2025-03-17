// import { useState, useEffect } from "react";
// import './App.css'

// const products = ["Телефон", "Ноутбук", "Наушник", "Планшет", "Сағат"];

// const App = () => {
//   const [korilgender, setkorilgender] = useState([]);

//   useEffect(() => {
//     const storedItems =
//       JSON.parse(localStorage.getItem("korilgender")) || [];
//     setkorilgender(storedItems);
//   }, []);

//   const handleProductClick = (product) => {
//     setkorilgender((prev) => {
//       const updatedList = [product, ...prev.filter((item) => item !== product)];
//       localStorage.setItem("korilgender", JSON.stringify(updatedList));
//       return updatedList;
//     });
//   };

//   return (
//     <div className="container">
//       <h2>Өнімдер</h2>
//       {products.map((product) => (
//         <button
//           key={product}
//           onClick={() => handleProductClick(product)}
//         >
//           {product}
//         </button>
//       ))}
//       <h2>Сонгы қаралғандар</h2>
//       <ul>
//         {korilgender.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
