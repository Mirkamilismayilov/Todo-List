import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'
import NewTodo from './NewTodo'

const Todos = () => {

  const { todos } = useContext(Context)

  return (
    <div className='flex justify-center items-center '>
      <ul className='h-full w-full flex justify-center items-center mt-[58px] flex-col gap-4'>
        {
          todos.length !== 0 ? (
            <>
              {
                todos?.map((todo, index) => (
                  <NewTodo todo={todo} key={index} />
                ))
              }
            </>
          ) : (<div className='listBosdur m-12 mt-18 text-white text-4xl opacity-30 '>List is empty!</div>)
        }
      </ul>
    </div>
  )
}

export default Todos
