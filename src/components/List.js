import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../ui/Card'
const List = () => {
    const todos = useSelector((state)=>state.todos);
  return (
    <section className='item'>
            
            <ul>
                {
                     todos.map((todo)=>{
                        return(
                                    <Card id={todo.id} title={todo.title} completed = {todo.completed}/>
                        )
                        
                     })
                }
            </ul>
    </section>
  )
}

export default List