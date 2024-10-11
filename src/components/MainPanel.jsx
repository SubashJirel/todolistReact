import TaskList from './TaskList';
const MainPanel = ({ tasks, setProjectsList }) => (
  <div className="main-panel">
    <TaskList tasks={tasks} setProjectsList={setProjectsList} />
  </div>
);
export default MainPanel;
