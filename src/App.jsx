import './App.css';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import { useState } from 'react';
import { isToday, isThisWeek, parseISO } from 'date-fns';

function App() {
  const [projectsList, setProjectsList] = useState([
    {
      title: 'default Project',
      tasks: [
        {
          title: 'This is a sample task',
          description: 'some short description',
          date: '2024-10-10',
          projectIndex: 0,
          taskIndex: 0,
          completed: false,
        },
        {
          title: 'This is a completed task',
          description: 'some short description',
          date: '2024-10-11',
          projectIndex: 0,
          taskIndex: 1,
          completed: true,
        },
      ],
    },
    {
      title: 'Workout',
      tasks: [
        {
          title: 'Do regular home workout',
          description: 'Just do it',
          date: '2024-10-12',
          projectIndex: 1,
          taskIndex: 0,
          completed: false,
        },
      ],
    },
  ]);
  const [selectedView, setSelectedView] = useState('all'); // 'all', 'today', 'week', or project index

  const getFilteredTasks = () => {
    let tasks = [];
    projectsList.forEach((project) => {
      project.tasks.forEach((task) => {
        const taskDate = parseISO(task.date);
        if (selectedView === 'all') {
          tasks.push(task);
        } else if (selectedView === 'today' && isToday(taskDate)) {
          tasks.push(task);
        } else if (selectedView === 'week' && isThisWeek(taskDate)) {
          tasks.push(task);
        } else if (
          typeof selectedView === 'number' &&
          selectedView === project.projectIndex
        ) {
          tasks.push(task);
        }
      });
    });
    return tasks;
  };

  return (
    <div className="todolist-app">
      <Sidebar setSelectedView={setSelectedView} projectsList={projectsList} />
      <MainPanel tasks={getFilteredTasks()} setProjectsList={setProjectsList} />
    </div>
  );
}

export default App;
