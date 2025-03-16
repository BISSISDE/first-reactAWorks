// import { useState } from "react";
// import './App.css' 

// export default function App() {
//   const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
//   const [filtersJup, setFilterJup] = useState([]);
//   const [filtersTak, setFilterTak] = useState([]);

//   const filterNumsJup = () => {
//     setFilterJup(numbers.filter((num) => num % 2 === 0));
//   };

//   const filterNumsTak = () => {
//     setFilterTak(numbers.filter((num) => num % 2 === 1));
//   };

//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Үй жинау", completed: false },
//     { id: 2, text: "Сабақ оқу", completed: true },
//     { id: 3, text: "Тамақ", completed: false },
//   ]);

//   const handleRemove = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const [filter, setFilter] = useState("all");

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === "completed") return task.completed;
//     if (filter === "incomplete") return !task.completed;
//     return true;
//   });

//   return (
//     <div className="container">
//       <h2 >Сандар тізімі</h2>
//       <div className="containInside">
//         {numbers.map((num, index) => (
//           <p key={index} >
//             {num}
//           </p>
//         ))}
//       </div>
//       <div >
//         <button
//           onClick={filterNumsJup}
//         >
//           Жұп сандар
//         </button>
//         <button
//           onClick={filterNumsTak}
//         >
//           Тақ сандар
//         </button>
//       </div>

//       <h3 >Жұп сандар:</h3>
//       <ul >
//         {filtersJup.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>

//       <h3 >Тақ сандар:</h3>
//       <ul >
//         {filtersTak.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>

//       <h3>Тапсырмалар</h3>
//       <div>
//         <button
//           onClick={() => setFilter("all")}
//         >
//           Барлығы
//         </button>
//         <button
//           onClick={() => setFilter("completed")}
//         >
//           Аяқталғандар
//         </button>
//         <button
//           onClick={() => setFilter("incomplete")}
//         >
//           Аяқталмағандар
//         </button>
//       </div>
//       <ul>
//         {filteredTasks.map((task) => (
//           <li key={task.id}>  
//             <span>
//               {task.text}
//             </span>
//             <button
//               onClick={() => handleRemove(task.id)}
//             >
//               🗑️
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
