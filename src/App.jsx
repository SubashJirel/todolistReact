import './App.css';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import { useState, useEffect } from 'react';
import { isToday, isThisWeek, parseISO } from 'date-fns';

function App() {
  const [projectsList, setProjectsList] = useState([
    {
      title: 'default Project',
      projectIndex: 0,
      tasks: [
        {
          title: 'This is a sample task',
          description: 'some short description',
          date: '2024-11-11',
          projectIndex: 0,
          taskIndex: 0,
          completed: false,
        },
        {
          title: 'This is a completed task',
          description: 'some short description',
          date: '2024-11-11',
          projectIndex: 0,
          taskIndex: 1,
          completed: true,
        },
      ],
    },
    {
      title: 'Workout',
      projectIndex: 1,
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
    {
      title: 'Study Project',
      projectIndex: 2,
      tasks: [
        {
          title: 'Reading Novel',
          description: 'Read read read',
          date: '2024-10-12',
          projectIndex: 2,
          taskIndex: 0,
          completed: false,
        },
        {
          title: 'Study data warehose and data mining',
          description: 'for machine learning and model training',
          date: '2024-10-11',
          projectIndex: 2,
          taskIndex: 1,
          completed: true,
        },
      ],
    },
  ]);
  const [selectedView, setSelectedView] = useState('all'); // 'all', 'today', 'week', or project index
  const [filteredTasks, setFilteredTasks] = useState([]);

  // const getFilteredTasks = () => {
  //   let tasks = [];
  //   projectsList.forEach((project) => {
  //     project.tasks.forEach((task) => {
  //       const taskDate = parseISO(task.date);
  //       // console.log(taskDate);
  //       // console.log(typeof selectedView);
  //       if (selectedView === 'all') {
  //         tasks.push(task);
  //       } else if (selectedView === 'today' && isToday(taskDate)) {
  //         tasks.push(task);
  //       } else if (selectedView === 'week' && isThisWeek(taskDate)) {
  //         tasks.push(task);
  //       } else if (
  //         typeof selectedView === 'number' &&
  //         selectedView === project.projectIndex
  //       ) {
  //         // tasks.push(task);
  //         // console.log('this issssssssssssssssssssssssssss trueeeeeeeeeeee');

  //         console.log(selectedView);
  //         console.log(project.projectIndex);
  //         console.log(tasks);
  //       }
  //     });
  //   });
  //   return tasks;
  // };
  // console.log(selectedView);

  // if i didn't use useEffect hook here for flterTasks function, then i got undefined for task.projectIndex, intially then only i got number in later render
  useEffect(() => {
    const filterTasks = () => {
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
            selectedView == task.projectIndex
          ) {
            // console.log('This is trueeee');
            // console.log(selectedView);
            // console.log(task.projectIndex);
            tasks.push(task);
          }
        });
      });
      setFilteredTasks(tasks);
    };

    filterTasks();
  }, [selectedView, projectsList]); // Depend on selectedView and projectsList
  return (
    <div className="todolist-app">
      <Sidebar
        setSelectedView={setSelectedView}
        projectsList={projectsList}
        setProjectsList={setProjectsList}
      />
      <MainPanel
        tasks={filteredTasks}
        setProjectsList={setProjectsList}
        selectedProject={typeof selectedView === 'number' ? selectedView : null}
      />
      {/* use of derived state here selectedProject={typeof selectedView === 'number' ? selectedView : null}*/}
    </div>
  );
}

export default App;
