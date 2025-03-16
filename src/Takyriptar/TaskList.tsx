function TaskList({ tasks, filter, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks
        .filter((task) =>
          task.text.toLowerCase().includes(filter.toLowerCase())
        )
        .map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button onClick={() => toggleTask(task.id)}>✅</button>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
            <button onClick={() => editTask(task.id)}>✏️</button>
          </li>
        ))}
    </ul>
  );
}

export default TaskList;


// import "./App.css";
// import { useState } from "react";
// import TaskList from "./TaskList";
// import TaskInput from "./TaskInput";
// import TaskFilter from "./TaskFilter";
// import FirstTask from "./Classwork11d1t";
// import SecondTask from "./Classwork11d2t";
// import ThirdTask from "./Classwork11d";
// import ForthTask from "./Classwork11d4t";
// import TaggleText from "./Classwork11d5t";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("");

//   const addTask = (taskText) => {
//     if (!taskText.trim()) return;
//     const newTask = { id: Date.now(), text: taskText, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   const toggleTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const handleFilterChange = (query) => {
//     setFilter(query);
//   };

//   const editTask = (id) => {
//     const newText = prompt("New:");
//     if (newText) {
//       setTasks(
//         tasks.map((task) =>
//           task.id === id ? { ...task, text: newText } : task
//         )
//       );
//     }
//   };

//   return (
//     <div className="container">
//       <h1>📝 Менің Тапсырмаларым</h1>
//       <TaskInput addTask={addTask} />
//       <TaskFilter filter={filter} setFilter={handleFilterChange} />
//       <TaskList
//         tasks={tasks}
//         filter={filter}
//         toggleTask={toggleTask}
//         deleteTask={deleteTask}
//         editTask={editTask}
//       />
//       <FirstTask />
//       <SecondTask />
//       <ThirdTask />
//       <ForthTask />
//       <TaggleText />
//     </div>
//   );
// }

// export default App;
