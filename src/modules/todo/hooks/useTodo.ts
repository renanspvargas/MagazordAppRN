import {useState} from 'react';

export function useTodo() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Tarefa 1',
      description: 'Descrição da Tarefa 1',
      completed: false,
    },
    {
      id: 3,
      title: 'Tarefa 3',
      description: 'Descrição da Tarefa 3',
      completed: false,
    },
    {
      id: 2,
      title: 'Tarefa 2',
      description: 'Descrição da Tarefa 2',
      completed: true,
    },
    {
      id: 4,
      title: 'Tarefa 4',
      description: 'Descrição da Tarefa 4',
      completed: true,
    },
  ]);

  function didTapTask(index: number) {
    console.log(tasks);
    console.log('inicial', tasks[index].completed);
    tasks[index].completed = tasks[index].completed ? false : true;
    console.log('depois', tasks[index].completed);
    const removedItem = tasks.splice(index, 1)[0];

    if (!removedItem.completed) {
      tasks.unshift(removedItem);
    } else {
      tasks.push(removedItem);
    }

    console.log(tasks);
    setTasks([...tasks]);
  }

  return {tasks, didTapTask};
}
