import React from 'react'

const Form = ({setInput,input,todo,setTodo,status,setStatus}) => {
    const handleChange = (e) =>{
        setInput(e.target.value)
        console.log(e.target.value)
    }
    const submitHandle = (e) => {
        e.preventDefault()
        setTodo([
            ...todo,{text:input, done:false, id:Math.floor(Math.random() *100)}
        ])
        setInput("")
        console.log(todo)
    }
    const statusHandle = (e) => {
        setStatus(e.target.value)
        
    }
    return(
        <div>
        <header>
      <h1>Todo list</h1>
    </header>
    <form>
      <input value={input} onChange={handleChange} type="text" className="todo-input" />
      <button onClick={submitHandle} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandle} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option  value="completed">Completed</option>
          <option  value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
    
    )
}

export default Form