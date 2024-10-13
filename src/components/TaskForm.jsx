import React from 'react';

function TaskForm({ newTask, setNewTask, setIsAddingTask, handleAddTask }) {
  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <input
        type="date"
        value={newTask.date}
        onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
      />
      <button onClick={handleAddTask}>Add</button>
      <button onClick={() => setIsAddingTask(false)}>Cancel</button>
    </div>
  );
}

export default TaskForm;
