import TaskList from './TaskList';
import { useState } from 'react';
import TaskForm from './TaskForm';
const MainPanel = ({ tasks, setProjectsList, selectedProject }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    date: '',
    completed: false,
  });

  const handleAddTask = () => {
    setProjectsList((prevProjects) => {
      return prevProjects.map((project) =>
        project.projectIndex === selectedProject
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                {
                  ...newTask,
                  taskIndex: project.tasks.length,
                  projectIndex: selectedProject,
                },
              ],
            }
          : project
      );
    });
    setNewTask({ title: '', description: '', date: '', completed: false });
    setIsAddingTask(false);
  };
  return (
    <div className="main-panel">
      <TaskList tasks={tasks} setProjectsList={setProjectsList} />
      {selectedProject !== null && (
        <>
          {!isAddingTask && (
            <button onClick={() => setIsAddingTask(true)}>Add New Task</button>
          )}
          {isAddingTask && (
            <TaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              setIsAddingTask={setIsAddingTask}
              handleAddTask={handleAddTask}
            />
          )}
        </>
      )}
    </div>
  );
};
export default MainPanel;
