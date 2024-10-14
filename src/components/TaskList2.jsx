import TaskItem from './TaskItem';
import TaskItem2 from './TaskItem2';
import { useState } from 'react';
const TaskList2 = ({ tasks, projectsList, setProjectsList }) => {
  const handleDeleteTask = (projectIndex, taskIndex) => {
    setProjectsList((prev) => {
      const updatedProjects = [...prev];
      updatedProjects[projectIndex].tasks.splice(taskIndex, 1);
      return updatedProjects;
    });
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem2
          key={index}
          task={task}
          handleDeleteTask={handleDeleteTask}
          projectsList={projectsList}
          setProjectsList={setProjectsList}
        />
      ))}
    </div>
  );
};

export default TaskList2;
