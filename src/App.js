
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React ,{ useState } from 'react';

function App() {

const onDelete = (todo)=>{
  console.log("i am onDelete of todo",todo);
  // Deleting this way in react doesnt Work.
  // let index = todos.indexOf(todo);
  // todos.splice(index, 1);

  setTodos(todos.filter((e)=>{
    return e!==todo;

  }));
const [todos ,setTodos] = useState([
  

 
    {
      sno:1,
      title: 'Go to the hospital',
      desc: 'you need to go hospital to buy cetamol'
    },
    {
      sno:2,
      title: 'do exercise of hands',
      desc: 'you need to execrise now'
    },
    {
      sno:3,
      title: 'Go to the walk',
      desc: 'evening walk is good for health so just do it'
    },
  ]);
  return (
    <>
    <Header title="My Todos List" searchbar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
   
    </>
   
  );
}

export default App;
