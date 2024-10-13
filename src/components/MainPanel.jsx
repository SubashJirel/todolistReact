import TaskList from './TaskList';
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList2 from './TaskList2';
const MainPanel = ({
  tasks,
  projectsList,
  setProjectsList,
  selectedProject,
}) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    date: '',
    completed: false,
  });
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

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
  const handleEditTask = (projectIndex, taskIndex) => {
    const taskToEdit = projectsList[projectIndex].tasks[taskIndex];
    setNewTask(taskToEdit);
    setEditingTaskIndex(taskIndex);
    setIsEditingTask(true);
  };
  const saveEditedTask = () => {
    setProjectsList((prev) => {
      const updatedProjects = [...prev];
      const taskIndex = editingTaskIndex;
      const projectIndex = selectedProject;
      updatedProjects[projectIndex].tasks[taskIndex] = newTask;
      return updatedProjects;
    });
    setIsEditingTask(false);
    setNewTask({ title: '', description: '', date: '' });
  };
  // const handleDeleteTask = (projectIndex, taskIndex) => {
  //   setProjectsList((prev) => {
  //     const updatedProjects = [...prev];
  //     updatedProjects[projectIndex].tasks.splice(taskIndex, 1);
  //     return updatedProjects;
  //   });
  // };

  // const filteredTasks = projectsList[selectedProject]?.tasks || [];
  return (
    <div className="main-panel">
      {/* <TaskList tasks={tasks} setProjectsList={setProjectsList} /> */}
      {/* <TaskList
        tasks={tasks}
        projectIndex={selectedProject}
        setProjectsList={setProjectsList}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      /> */}
      <TaskList2
        tasks={tasks}
        projectsList={projectsList}
        setProjectsList={setProjectsList}
      />
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
