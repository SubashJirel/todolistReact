const TaskItem = ({ task, setProjectsList }) => (
  <div className={`task-item ${task.completed ? 'completed' : ''}`}>
    <h4>{task.title}</h4>
    <p>{task.description}</p>
    <span>{task.date}</span>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

export default TaskItem;
