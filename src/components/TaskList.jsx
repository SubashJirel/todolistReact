import TaskItem from './TaskItem';

const TaskList = ({ tasks, setProjectsList }) => (
  <div>
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} setProjectsList={setProjectsList} />
    ))}
  </div>
);

export default TaskList;
