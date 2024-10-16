import TaskItem from './TaskItem';
import TaskItem2 from './TaskItem2';
import { useState } from 'react';
const TaskList2 = ({ tasks, projectsList, setProjectsList }) => {
  const handleDeleteTask = (projectId, taskId) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this task?'
    );
    if (isConfirmed) {
      setProjectsList((prevProjects) =>
        prevProjects.map((project) =>
          project.projectIndex === projectId
            ? {
                ...project,
                tasks: project.tasks.filter(
                  (task) => task.taskIndex !== taskId
                ),
              }
            : project
        )
      );
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem2
          key={index}
          task={task}
          projectIndex={task.projectIndex}
          taskIndex={task.taskIndex}
          handleDeleteTask={handleDeleteTask}
          projectsList={projectsList}
          setProjectsList={setProjectsList}
        />
      ))}
    </div>
  );
};

export default TaskList2;
