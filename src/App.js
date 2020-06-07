import React, { Component } from 'react';
import Todoss from "./todos"
// import AppTodo from "./addform"
import Addtodo from './addform';

class App extends Component {
 
state={
  todos:[
    {id:1,content:"go for a walk"},
    {id:2,content:"Call Sameer"},
    {id:3,content:"Clean your room"}

  ]
}

deleteTodo=(id)=>{
  console.log(id);
 const todos=this.state.todos.filter(todo=>{
    return(todo.id !==id)
 });
 this.setState({
   todos:todos
 })
}

addtodo=(todo)=>{
  todo.id=Math.random();
  let todos=[...this.state.todos,todo]
  this.setState({
    todos:todos
  })
}

  render(){
    return (
      <div className="todo-App container">
      <h1 className="center blue-text">Todo list</h1>
      <Todoss
      todos={this.state.todos}
      deleteTodo={this.deleteTodo}
       />
       <Addtodo
         addtodo={this.addtodo}
       />
      </div>
    )
  }
}
export default App;
