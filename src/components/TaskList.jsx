import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  projectIndex,
  setProjectsList,
  handleEditTask,
  handleDeleteTask,
}) => (
  <div>
    {tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        projectIndex={projectIndex}
        setProjectsList={setProjectsList}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    ))}
  </div>
);

export default TaskList;
