import { useState } from "react";

function App() {

const [tasks, setTasks] = useState([]);
const [taskInput, setTaskInput] = useState("");

function addTask() {

if(taskInput.trim() === "") return;

setTasks([...tasks, taskInput]);
setTaskInput("");

}

function deleteTask(index) {

const newTasks = tasks.filter((task, i) => i !== index);
setTasks(newTasks);

}

return (

<div style={{textAlign:"center", marginTop:"50px"}}>

<h1>Dynamic Task List</h1>

<input
type="text"
placeholder="Enter task"
value={taskInput}
onChange={(e) => setTaskInput(e.target.value)}
/>

<button onClick={addTask}>Add Task</button>

<ul>

{tasks.map((task, index) => (

<li key={index}>

{task}

<button onClick={() => deleteTask(index)}>Delete</button>

</li>

))}

</ul>

</div>

);

}

export default App;