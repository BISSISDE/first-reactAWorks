
function TaskFilter({ filter, setFilter }:any) {
  return (
    <input
      type="text"
      placeholder="Тапсырмаларды іздеу..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="task-filter"
    />
  );
}
export default TaskFilter