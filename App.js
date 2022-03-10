import React, { useState } from 'react';
import './App.css'
import Addtask from './addtask';
import Task from './task';
function App() {
  const [task, settask] = useState('')
  const [todo, settodo] = useState([])

  return (
    <>
       <div className='flex'>
         <h1>TODO list</h1>
      <Task task={task} settask={settask} todo={todo} settodo={settodo} />
       </div>
      
      <Addtask settodo={settodo} todo={todo}/>
    </>
  )
}
export default App;
