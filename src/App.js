import React, { useState,useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist';
function App() {
  const [input,setInput] = useState("")
  const [todos,setTodo] = useState([])
  const [status,setStatus] = useState("all")
  const [filtertodo,setFiltertodo] = useState([])
  useEffect(() => {
      filterHandle()
  }, [todos, status]);

  const filterHandle = () => {
    switch(status){
      case 'completed':
        setFiltertodo(todos.filter(todo=> todo.done === true))
        break;
        case 'uncompleted' :
          setFiltertodo(todos.filter(todo=> todo.done === false))
          break;
          default :
          setFiltertodo(todos)
          break;

    }
    
  }

  return (
    <div className="App">
      
      <Form input={input} setInput={setInput} todo={todos} setTodo = {setTodo} status={status} setStatus={setStatus} />
      <Todolist  todos={todos} setTodo = {setTodo} filtertodo={filtertodo} />
      
      
    </div>
  );
}

export default App;
