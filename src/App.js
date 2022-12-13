import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {add, RemoveTask} from "./Redux/Reducer"
import { useState } from 'react';

function App() {

 const Tasks = useSelector(state => state.Tasks.list )  

 const dispatch = useDispatch()

 const [task, setTask] = useState("")



  return (
    <div className="App">
      <input type="text" onChange={(e)=> setTask(e.target.value)}/>
      <button onClick={()=> dispatch(add({titre : task, status : false}))}>Add</button>
      {
        Tasks.map(item =>(
          <>
          <h4> {item.titre} </h4>
          <button onClick={()=> dispatch(RemoveTask(item.titre))}>delete</button>
          </>
        ))
      }

    </div>
  );
}

export default App;
