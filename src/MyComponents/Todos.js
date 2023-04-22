import React from 'react'
import {Todoitem} from './Todoitem';

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.map((todo) =>{
        return <Todoitem todo={todo}/>  
      })}
       
        </div>
  )
}
