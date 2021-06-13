import React from 'react'
const Todo = ({text,todo,setTodo,todos,filtertodo}) => {
    const delHandler = () => {
        let id = todo.id
        setTodo(todos.filter((item) => item.id !== id));
        
    }
    const doneHandler = () => {
        
        setTodo(todos.map((item) => {
            if(item.id === todo.id){
                
                return{
                    ...item, done: !item.done
                };
                
            }
            return item;
        }))
        
    }    
    return(
        <div className="todo">
            <li className = {`todo-item ${todo.done ? "completed" : ""}`}>{todo.text}</li>
            <button onClick={doneHandler} className = "complete-btn">
                <i className = "fas fa-check"></i>
            </button>
            <button onClick = {delHandler} className = "trash-btn">
                <i className = "fas fa-trash"></i>
            </button>
        </div>

    )
}
export default Todo