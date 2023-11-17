import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'

const Todo = () => {

  const { handleChange, submit, item1 } = useContext(Context)

  return (
    <div className='flex items-center justify-center gap-5 flex-col w-full'>
      <h1 className='uppercase font-semibold text-white text-[45px]'>todo list</h1>
      <form className='flex justify-center  rounded-[10px] items-center flex-col gap-7 p-9 bg-gray-700 bg-opacity-80 w-[70%] ' onSubmit={submit}>
        <input value={item1.value} className='border-b-4 border-sky-400 text-white bg-gray-700 bg-opacity-80 outline-none text-xl w-[245px]' placeholder='What would you like to do?' type="text" onChange={handleChange} />
        <button className='w-36 p-2 border-fuchsia-400 border-2 hover:bg-gray-600 text-white rounded-2xl '>Add</button>
      </form>

    </div>
  )
}

export default Todo
