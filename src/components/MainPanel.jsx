import TaskList from './TaskList';
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList2 from './TaskList2';
import uniqid from 'uniqid';

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
        project.title == selectedProject
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                {
                  ...newTask,
                  taskIndex: uniqid(),
                  projectIndex: project.projectIndex,
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
    <div className=" p-4 h-full">
      <TaskList2
        tasks={tasks}
        projectsList={projectsList}
        setProjectsList={setProjectsList}
      />

      {selectedProject !== 'all' &&
        selectedProject !== 'today' &&
        selectedProject !== 'week' && (
          <>
            {!isAddingTask && (
              <button
                className="mt-4 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={() => setIsAddingTask(true)}
              >
                {' '}
                Add New Task
              </button>
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
