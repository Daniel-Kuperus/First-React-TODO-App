import { useState } from "react";

import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import RandomDog from "./components/RandomDog";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks); // TODO: Learn more about the origins of the 'magical' useState functionality.
  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name}
      isPressed={name === filter} setFilter={setFilter} />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${tasks.length}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const undeletedTasks = tasks.filter(task => task.id !== id);
    setTasks(undeletedTasks);
  }

  function editTask(id, newName) {
    const editedTask = tasks.find(task => task.id === id);
    editedTask.name = newName;
    setTasks([...tasks]);
  }

  function toggleTaskCompleted(id) {
    const toggledTask = tasks.find(task => task.id === id);
    toggledTask.completed = !toggledTask.completed;
    setTasks([...tasks]);
  }

  const taskList = tasks
    ?.filter(FILTER_MAP[filter])
    ?.map((task) => (
      <Todo id={task.id} name={task.name}
        completed={task.completed} key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask} />
    ));

  return ( // Be careful to use '()' brackets instead of '{}', in React.
    <div className="todoapp stack-large">
      <div className="header-container">
        <h1>Simple TODO app</h1>
        <RandomDog></RandomDog>
      </div>
      <Form addTask={addTask}></Form>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{taskList.length} {taskList.length === 1 ? 'task' : 'tasks'} remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
