import logo from './logo.svg';
import './App.css';
import Listtodos from './components/Listtodos';
import Addtodos from './components/Addtodos';
import Header from './components/Header';
import Footer from './components/Footer';
import Car from './components/Car';
import React from "react";

function App() {
  const [todos,setTodos]=React.useState([
    {id:1,title:'Sample todo 1',description:"Sample description 1"},
    {id:2,title:'Sample todo 2',description:"Sample description 2"}
  ]);
  const addtodo = (props) => {
    let new_id;
    todos.length ? new_id=(todos[todos.length-1].id)+1 : new_id=1
    setTodos(
      [...todos,{id:new_id,title:props.title,description:props.description}]
    )
  }
  const deleteTodo = (props) => {
    console.log('this is delete todos:',props)
    setTodos(
      todos.filter(todo => todo.id !== props)
    )  
  }
  return (
    <div className="App">
      <Header/>
      <Addtodos initAdd={addtodo}/>
      <Listtodos removeid={deleteTodo} notes={todos}/>
      <Footer/>
    </div>
  );
}

export default App;
