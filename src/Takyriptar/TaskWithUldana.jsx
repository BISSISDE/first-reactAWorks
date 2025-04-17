// import React, { useReducer, useState } from "react";
// import "./App.css";

// const initialState = {
//   ToDo: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "AddToDo":
//       return {
//         ToDo: [
//           ...state.ToDo,
//           { id: Date.now(), title: action.payload, completed: false },
//         ],
//       };
//     case "ToggleToDo":
//       return {
//         ToDo: state.ToDo.map((todo) =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       };
//     case "editToDo":
//       return {
//         ToDo: state.ToDo.map((todo) =>
//           todo.id === action.payload.id
//             ? { ...todo, title: action.payload.title }
//             : todo
//         ),
//       }
//     case "deleteToDo":
//       return {
//         ToDo: state.ToDo.filter((todo) => todo.id !== action.payload)}
//     default:
//       return state
//   }
// }


// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   const [input, setInput] = useState("")
//   const [editId, setEditId] = useState(null)
//   const [editTitle, setEditTitle] = useState("")

//   const handleAddTodo = () => {
//     if (input.trim()) {
//       dispatch({ type: "AddToDo", payload: input })
//       setInput("")
// }}
//   const handleToggleTodo = (id) => {
//     dispatch({ type: "ToggleToDo", payload: id })
//   }
//   const handleEditTodo = (id, title) => {
//     setEditId(id);
//     setEditTitle(title);
//   };
//   const handleSaveEdit = () => {
//     if (editTitle.trim()) {
//       dispatch({
//         type: "editToDo",
//         payload: { id: editId, title: editTitle },
//       });
//       setEditId(null);
//       setEditTitle("");
//     }
//   }
// const handleDeleteTodo = (id) => {
//     dispatch({ type: "deleteToDo", payload: id });
// }

//   return (
//     <div className="container">
//       <h2>My tasks</h2>
//       <div className="inputs">
//         <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} placeholder="writle tasks"/>
//         <button onClick={handleAddTodo}>add</button>
//       </div>

//       <ul className="ToDoList">
//         {state.ToDo.map((todo) => (
//           <li key={todo.id} className="li">
//             {editId === todo.id ? (
//               <div className="Divedit">
//                 <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} /> 

//                 <button onClick={handleSaveEdit}>Save</button>
//               </div>
//             ) : (
//               <div className="todo-content">
//                 <input type="checkbox" checked={todo.completed}  onChange={() => handleToggleTodo(todo.id)} />
//                 <span onClick={() => handleToggleTodo(todo.id)} className={todo.completed && "completed" || ""}> {todo.title} </span>
//                 <div className="actions">
//                   <button onClick={() => handleEditTodo(todo.id, todo.title)}>edit</button>
//                   <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;