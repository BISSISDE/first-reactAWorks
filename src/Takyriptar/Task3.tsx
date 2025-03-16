// // day1 Homework

// const products = [
//   { id: 1, name: "Ноутбук", price: 300000, category: "Электроника" },
//   { id: 2, name: "Кітап", price: 5000, category: "Әдебиет" },
//   { id: 3, name: "Кроссовки", price: 25000, category: "Спорт" },
//   { id: 4, name: "Телефон", price: 150000, category: "Электроника" },
// ];

// function ProductCard({name,price,category}) {
//     return (
//         <div>
//         <h1>
//             {name} - {price} тг. - {category}
//         </h1>
//         </div>
//     );
// }

// function ProductList() {
//     return (
//       <div>
//         <h1 className="TextList">Product List</h1>
//         <div className="card">
//           <ProductCard
//             name={products[0].name}
//             price={products[0].price}
//             category={products[0].category}
//           />
//           <ProductCard
//             name={products[1].name}
//             price={products[1].price}
//             category={products[1].category}
//           />
//           <ProductCard
//             name={products[2].name}
//             price={products[2].price}
//             category={products[2].category}
//           />
//           <ProductCard
//             name={products[3].name}
//             price={products[3].price}
//             category={products[3].category}
//           />
//         </div>
//       </div>
//     );
// }

// export default ProductList;

// import React,{useState} from "react";
// function App() {
//   const [count, setCount] = useState(10);
//   function add() {
//     setCount(count-1)
//   }
//   return(
//     <div>
//       <h1>Counter</h1>
//       <h1>{count}</h1>
//       <button onClick={add}>Minus</button>
//     </div>
//   )
// }
// export default App

// // // day2 Home&Class work

// function Profile(props:any){
//   return (
//     <div className="profile">
//       <h1>Profile</h1>
//       <img src={props.src} alt="" />
//       <h1>{props.name}</h1>
//       <p>{props.bio}</p>
//     </div>
//   );
// }
// export default Profile;

// day3 Kaitalay
// import { useState } from "react";

// function SaveandShow() {
//   const [items, setText] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   function addItem(event:any) {
//     event.preventDefault();
//     if (inputValue) {
//       setText((text) => [...text, inputValue]);
//       setInputValue("");
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={addItem}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button>add</button>
//       </form>

//       <ul>
//         {items.map((text, index) => (
//           <li key={index}>{text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SaveandShow;
