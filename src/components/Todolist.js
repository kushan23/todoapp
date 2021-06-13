import React from 'react'
import Todo from './todo'

const Todolist = ({todos, setTodo,filtertodo}) => {
    return (
        <div className = "todo-container">
            <ul className = "todo-list">
                {filtertodo.map((todo) => (
                    <Todo 
                    todo ={todo} 
                    todos = {todos}
                    setTodo = {setTodo}
                    filtertodo = {filtertodo}
                    />
                 ))}
                
            </ul>
            
        </div>
    )
}

export default Todolist