
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoTask from './Components/ToDoTask';
import { useState } from 'react';


function App() {
  const [updateId,setUpdateId]=useState("");
  const[task,setTask] = useState("");
  return (
    <div>
      <TodoForm updateId={updateId} setUpdateId={setUpdateId}  task={task} setTask={setTask}></TodoForm>
      <TodoTask setUpdateId={setUpdateId} setTask={setTask}></TodoTask>

      
    </div>
  );
}

export default App;
