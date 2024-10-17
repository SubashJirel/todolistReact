import './sidebar.css';
import { useState } from 'react';
import uniqid from 'uniqid';
import { Trash2 } from 'lucide-react';

const Sidebar = ({ setSelectedView, projectsList, setProjectsList }) => {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  function handleAddProject() {
    let newProject = {
      title: newProjectName,
      projectIndex: uniqid(),
      tasks: [],
    };
    setProjectsList((prev) => [...prev, newProject]);
    setIsAddingProject(false);
    setNewProjectName('');
  }

  function handleDeleteProject(projectId) {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this Project?'
    );
    if (isConfirmed) {
      setProjectsList((prevProjects) => {
        return prevProjects.filter(
          (project) => project.projectIndex !== projectId
        );
      });
    }
  }

  return (
    <div className="w-64 bg-gray-800 p-4 h-full flex flex-col justify-start">
      <div>
        <h3 className="text-lg font-semibold mb-4">Tasks</h3>
        <button
          className="block w-full text-left py-2 hover:bg-gray-700 rounded"
          onClick={() => setSelectedView('all')}
        >
          All Tasks
        </button>
        <button
          className="block w-full text-left py-2 hover:bg-gray-700 rounded"
          onClick={() => setSelectedView('today')}
        >
          Today
        </button>
        <button
          className="block w-full text-left py-2 hover:bg-gray-700 rounded"
          onClick={() => setSelectedView('week')}
        >
          This Week
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Projects</h3>
        {projectsList.map((project, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <button
              className="text-left flex-grow py-1 hover:bg-gray-700 rounded"
              onClick={() => setSelectedView(project.title)}
            >
              {project.title}
            </button>
            <Trash2
              className="text-red-500 cursor-pointer hover:text-red-400"
              onClick={() => handleDeleteProject(project.projectIndex)}
            />
          </div>
        ))}
        <button
          className="mt-4 text-blue-400 hover:text-blue-300"
          onClick={() => setIsAddingProject(true)}
        >
          Add New Project
        </button>
        {isAddingProject && (
          <div className="mt-2">
            <input
              type="text"
              className="bg-gray-700 text-white p-2 rounded mb-2 w-full focus:outline-none"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
                onClick={() => handleAddProject()}
              >
                Add
              </button>
              <button
                className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded"
                onClick={() => setIsAddingProject(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
