import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/reducer'

const Card = ({id,title, completed}) => {
  const dispatch = useDispatch();
  const handleCheckboxclick= () =>{
      dispatch(toggleComplete({id: id, completed: !completed}))
  }
  const handleDelete= () =>{
    dispatch(deleteTodo({id:id}))
  }
  return (
   <li className={`undone`}>
        <div classname='flat'>
        <span className='center'>
          <input
          type='checkbox'
          className='box'
          checked={completed}
         onChange={handleCheckboxclick}
          >
          </input>
          {title}
        </span>
        <button className='btn btn__red' onClick={handleDelete}>Delete</button>
        </div>
   </li>
  )
}

export default Card