import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'
import NewTodo from './NewTodo'


const Todos = () => {
  

  const {todos} = useContext(Context)
 
  return (
    <div className='flex justify-center items-center   '>
    
      <ul className=' h-full w-full flex justify-center items-center   mt-2 flex-col gap-4 '>
     { 
      todos.length !== 0 ? (
     <>
        {
          
          todos?.map((todo,index)=>(

          
           
           <NewTodo todo={todo} key={index} />

          
  
          ))

        }
        </>
      ) : (<div className='listBosdur '>List is Empty</div>)
       }
      </ul>
    </div>
  )
}

export default Todos
