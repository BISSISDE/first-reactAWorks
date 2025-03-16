import React, { useState } from "react";
function TaskInput({ addTask }: any) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Add task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">➕ Қосу</button>
    </form>
  );
}
export default TaskInput