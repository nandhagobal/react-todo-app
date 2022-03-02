import './App.css';
import { useState } from 'react';


function App() {
  const [task,setTask]=useState("");
  const [taskList,setTakList]=useState([]);
  var onChangeHandler=(value)=>{
  setTask(value);
}
  var addTaskHandler=()=>{
  var tempArray=[...taskList];
  tempArray.push(task);
  setTakList(tempArray);
}
  var onCloseHandler=(index)=>{
    var tempArray=[...taskList]
    tempArray=tempArray.filter((ele,ind)=>{
      return index!==ind
    })
    setTakList(tempArray);
  }
  return (
    <div className="App">
      <h1>Todo List React App</h1>
      <input onChange={e=>onChangeHandler(e.target.value)}></input>
      <button onClick={addTaskHandler}>Add Task</button>
      {taskList.length==0? <p>No Task is added</p> : <p><b>Todo list</b></p>}
      {taskList.map((ele,index)=>{
        return <div key={index} className="item"><h4>{ele}</h4><span className="close" onClick={()=>{onCloseHandler(index)}}>X</span></div>
      })}
    </div>
  );
}

export default App;
