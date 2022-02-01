import './App.scss';
import {useState} from 'react';
import {Routes,Route,Link} from "react-router-dom";
import {Homepage} from './pages/home/index.js';
import {Notfoundpage} from './pages/404/index.js';

function App() {
  const [todos, setTodos] = useState([]);
  const AddTask = ()=>{
    
  }
  const RemoveTask = ()=>{
    
  }
  const HandleToggle = ()=>{
    
  }
  return (
    <div className="app mf m">
      <ul className="output">
        {todos.map((todo) =>{
          return (
            <li className="output_item" key={todo.id}>
    
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default App;
