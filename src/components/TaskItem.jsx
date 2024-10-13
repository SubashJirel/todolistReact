import React from 'react';

const TaskItem = ({
  task,
  taskIndex,
  projectIndex,
  handleEditTask,
  handleDeleteTask,
}) => (
  <div className={`task-item ${task.completed ? 'completed' : ''}`}>
    <h4>{task.title}</h4>
    <p>{task.description}</p>
    <span>{task.date}</span>
    <button onClick={() => handleEditTask(projectIndex, taskIndex)}>
      Edit
    </button>
    <button onClick={() => handleDeleteTask(projectIndex, taskIndex)}>
      Delete
    </button>
  </div>
);

export default TaskItem;
