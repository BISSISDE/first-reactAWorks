import "./AboutMe.css";
// // day1 Homework 

// const tasks = [
//   { id: 1, title: "React үйрену", completed: true },
//   { id: 2, title: "UI/UX дизайн жасау", completed: false },
//   { id: 3, title: "Жоба жасау", completed: false },
// ];

// function TaskItem({ title, completed }) {
//   if (!completed) {
//     return (
//       <div>
//         <s>{title}</s>
//       </div>
//     );
//   } else {
//     return <div>{title}</div>;
//   }
// }

// function TaskList() {
//   return (
//     <div>
//       <h1 className="InfoH1">Тапсырмалар тізімі</h1>
//       <TaskItem title={tasks[0].title} completed={tasks[0].completed} />
//       <TaskItem title={tasks[1].title} completed={tasks[1].completed} />
//       <TaskItem title={tasks[2].title} completed={tasks[2].completed} />
//     </div>
//   );
// }

// export default TaskList;

// // // day2 Home&Class work

// function ProductCard(props: any) {
//   return (
//     <div className="thingsContainer">
//       <div className="things">
//         <img src={props.src} alt="" />
//         <h2>{props.name}</h2>
//         <p>Price: {props.price}</p>
//       </div>
//     </div>
//   );
// }
// export default ProductCard;

// day3 Classwork 

// function KeyEvent() {

//   function Onkeydownn (event:any){
//     console.log(event.target.value);
//   }
//   function Submit() {
//     alert('Submited')
//   }
//   function HandleChange(event:any) {
//     console.log(event.target.value.toUpperCase());
    

//   }
//   return(
//     <form>
//       <input onChange={HandleChange} type="text" onKeyDown={Onkeydownn} />
//       <button type="submit" onClick={Submit}>Enter</button>
//     </form>
//   )
// }

// export default KeyEvent;

// import {useState} from "react";
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
// export default App;