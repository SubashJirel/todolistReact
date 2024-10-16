import React from 'react';

function TaskForm({ newTask, setNewTask, setIsAddingTask, handleAddTask }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Task Form</h2>
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={newTask.date}
          onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between">
          <button
            onClick={handleAddTask}
            className="bg-blue-600 hover:bg-blue-500 text-white py-1 px-4 rounded"
          >
            Add
          </button>
          <button
            onClick={() => setIsAddingTask(false)}
            className="bg-red-600 hover:bg-red-500 text-white py-1 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
