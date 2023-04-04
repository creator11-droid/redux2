import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodos } from "../redux/reducer";


const ToDoList = () => {
const dispatch = useDispatch();
const [task , setTask] = useState('');
    
const newTask = (e) =>{
e.preventDefault()
dispatch(addTodos({
  title:task,
}))
}
console.log(task)
  return (
    <section>
    <div className='todo__list'>
        <input type='text'  className='todo__input' value={task} onChange={(e)=>setTask(e.target.value)}/>

        <button className='btn' onClick={newTask}> Add Task</button>
         </div>
         <div className="task">
        
         </div>
    </section>
  )
}

export default ToDoList