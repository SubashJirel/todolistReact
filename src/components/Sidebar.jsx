import './sidebar.css';
import { useState } from 'react';
import uniqid from 'uniqid';
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
  }

  return (
    <div className="sidebar">
      <div className="tasks-sidebar">
        <h3>Tasks</h3>
        <button onClick={() => setSelectedView('all')}>All Tasks</button>
        <button onClick={() => setSelectedView('today')}>Today</button>
        <button onClick={() => setSelectedView('week')}>This Week</button>
      </div>
      <div className="projects-section tasks-sidebar">
        <h3>Projects</h3>
        {projectsList.map((project, index) => (
          <button key={index} onClick={() => setSelectedView(project.title)}>
            {project.title}
          </button>
        ))}
        <button onClick={() => setIsAddingProject(true)}>
          Add New Project
        </button>
        {isAddingProject && (
          <div>
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <div>
              <button onClick={() => handleAddProject()}>Add</button>
              <button onClick={() => setIsAddingProject(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
