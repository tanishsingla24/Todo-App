import {useState} from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function updateTask(index) {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, status: 'Done' };
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  function deleteTask(index) {
    const updatedTasks_delete = tasks.filter((task, idx) => {return index !== idx});
    setTasks(updatedTasks_delete);
  }
//mycomment
  return (
    <>
      <div>

        <h1>Todo List</h1>

        <input type="text" placeholder="Enter a task" onChange={(event) => {
          setNewTask(event.target.value);
          }} />

        <button onClick={() => {
          setTasks([...tasks, { title: newTask, status: 'Pending' }]);
        }}>Add Task</button>

        

        <ul>
          {tasks.map( (task, index) => {
            return (<li key={index}>task: {task.title} status: {task.status}
            <button onClick={() => updateTask(index)}>Done</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
            </li>)
          } )}
        </ul>
        </div>
    </>
  )
}

export default App




// To pass the arugement in the funciton we have to use an arrow function in the onClick event handler.