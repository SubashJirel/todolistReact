import './sidebar.css';
const Sidebar = ({ setSelectedView, projectsList }) => (
  <div className="sidebar">
    <div className="tasks-sidebar">
      <h3>Tasks</h3>
      <button onClick={() => setSelectedView('all')}>All Tasks</button>
      <button onClick={() => setSelectedView('today')}>Today</button>
      <button onClick={() => setSelectedView('week')}>This Week</button>
    </div>
    <div className="projects-section">
      <h3>Projects</h3>
      {projectsList.map((project, index) => (
        <button key={index} onClick={() => setSelectedView(index)}>
          {project.title}
        </button>
      ))}
    </div>
  </div>
);
export default Sidebar;
