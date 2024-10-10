import React from 'react';

let projectsList = [];

// GET DEFAULT PROJECTS AND TASKS FROM LOCAL STORAGE
if (localStorage.getItem('projectsReact') === null) {
  projectsList = [
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
  ];
} else {
  const projectsFromStorage = JSON.parse(localStorage.getItem('projectsReact'));
  //   console.log(localStorage.getItem('projectsReact'))
  //   console.log(projectsFromStorage)
  projectsList = projectsFromStorage;
}

function Projects() {
  return (
    <div>
      {projectsList[0].tasks.map((val) => (
        <h3 key={val.taskIndex}>{val.title}</h3>
      ))}
    </div>
  );
}

export default Projects;
