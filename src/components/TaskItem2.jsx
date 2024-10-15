import React from 'react';
import { useState } from 'react';
import TaskForm from './TaskForm';
// import { Trash-2 } from 'lucide-react';
import { Trash2, Pencil } from 'lucide-react';
const TaskItem2 = ({
  task,
  projectsList,
  setProjectsList,
  handleDeleteTask,
  projectIndex,
  taskIndex,
}) => {
  const [newTask, setNewTask] = useState(task);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const handleEditTask = (projectIndex, taskIndex) => {
    // const taskToEdit = projectsList[projectIndex].tasks[taskIndex]; // fix this tomorrow
    const project = projectsList.find(
      (project) => project.projectIndex === projectIndex
    );
    if (!project) return;

    const taskToEdit = project.tasks.find(
      (task) => task.taskIndex === taskIndex
    );
    if (!taskToEdit) return; // Safely handle missing task
    // console.log(taskToEdit);
    setNewTask(taskToEdit);
    setIsEditingTask(true);
  };

  const saveEditedTask = (projectId, taskId) => {
    setProjectsList((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.projectIndex === projectId) {
          return {
            ...project,
            tasks: project.tasks.map((task) =>
              task.taskIndex === taskId ? { ...task, ...newTask } : task
            ),
          };
        }
        return project;
      });
    });

    setIsEditingTask(false);
    setNewTask({ title: '', description: '', date: '' });
  };

  return (
    <div
      className={`task-item flex justify-between ${
        task.completed ? 'completed' : ''
      }`}
    >
      <div className="flex flex-col ">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
      <div className="flex">
        <span>{task.date}</span>
        <button onClick={() => handleEditTask(projectIndex, taskIndex)}>
          Edit
          <Pencil />
        </button>
        <button>
          <Trash2
            className="cursor-pointer"
            onClick={() => handleDeleteTask(projectIndex, taskIndex)}
          />
        </button>
      </div>
      {isEditingTask && (
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          setIsAddingTask={setIsEditingTask}
          handleAddTask={() => saveEditedTask(projectIndex, taskIndex)}
        />
      )}
    </div>
  );
};

export default TaskItem2;
