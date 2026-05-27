// import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";
import React, {useState} from "react";
import {AddTodo} from "./Mycomponents/AddTodo";



function App() {
  
  
  // let myvariables =345;
  const onDelete =(todo) =>{
console.log("I am ondelete of todo",todo);
let index = todos.indexOf(todo);
todos.splice(index,1);

setTodos(todos.filter((e)=>{  //delete the todo
  return e!==todo;
}));
  }
  const addTodo=(title,desc) =>{
    console.log("I am adding this todo",title,desc)
   let sno = todos[todos.length-1].sno+1;
    const myTodo ={
      sno: sno,
      title:title,
      desc:desc,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const[todos, setTodos] = useState([
     
    {
      sno: 1, 
      title: "Go to the market",
      desc: "You need to go to thee market to get this job Done"
    },
    {
      sno: 2, 
      title: "Go to the college",
      desc: "You need to go to the college for  to get examination form "
    },
    {
      sno: 3, 
      title: "Go to the mall",
      desc: "You need to go to the mall for shopping"
    },
  ]

  );

  return (
    <>
   { <Header title="My Todos List" searchBar={true}/> }
   <AddTodo addTodo={addTodo}/> 
   <Todos todos={todos} onDelete ={onDelete}/>
   <Footer/>
    </>
  
  );
}

export default App;

    