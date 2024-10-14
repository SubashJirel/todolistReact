import React from 'react';
import { useState } from 'react';
import TaskForm from './TaskForm';
const TaskItem2 = ({
  task,
  projectsList,
  setProjectsList,
  handleDeleteTask,
}) => {
  const [newTask, setNewTask] = useState(task);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const handleEditTask = (projectIndex, taskIndex) => {
    const taskToEdit = projectsList[projectIndex].tasks[taskIndex]; // fix this tomorrow
    // console.log(taskToEdit);
    setNewTask(taskToEdit);
    setIsEditingTask(true);
  };
  const saveEditedTask = (projIdx, taskIdx) => {
    setProjectsList((prev) => {
      const updatedProjects = [...prev];
      const taskIndex = taskIdx;
      const projectIndex = projIdx;
      updatedProjects[projectIndex].tasks[taskIndex] = newTask;
      return updatedProjects;
    });
    setIsEditingTask(false);
    setNewTask({ title: '', description: '', date: '' });
  };
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <span>{task.date}</span>
      <button onClick={() => handleEditTask(task.projectIndex, task.taskIndex)}>
        Edit
      </button>
      {isEditingTask && (
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          setIsAddingTask={setIsEditingTask}
          handleAddTask={() =>
            saveEditedTask(task.projectIndex, task.taskIndex)
          }
        />
      )}
      <button
        onClick={() => handleDeleteTask(task.projectIndex, task.taskIndex)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem2;
