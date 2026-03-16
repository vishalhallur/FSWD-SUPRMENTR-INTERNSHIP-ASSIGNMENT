import { useState } from "react";

function App() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [message,setMessage] = useState("");

function handleSubmit(e){

e.preventDefault();

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
setMessage("Invalid Email Format");
return;
}

if(password.length < 6){
setMessage("Password must be at least 6 characters");
return;
}

setMessage("Signup Successful!");

}

return(

<div style={{textAlign:"center", marginTop:"50px"}}>

<h1>Smart Signup Form</h1>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Signup</button>

</form>

<p>{message}</p>

</div>

);

}

export default App;