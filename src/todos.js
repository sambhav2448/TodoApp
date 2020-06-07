import React from "react"
import "./todo.css"
import strong from "./try.module.css"

const Todos=(props)=>{

    const todoList=props.todos.length ? (
        props.todos.map(todo=>{
            return(
                <div className="card-panel  teal lighten-1  collection-item" key={todo.id}>
                    <span onClick={()=>{props.deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ):(
        <p className="center card-panel blue darken-1">U have no todos left</p>
    )

    return(
        <div className={`todo todos center collection  black-text  ${strong.bold}`}>
            {todoList}
            
        </div> 
    )
}

export default Todos

 