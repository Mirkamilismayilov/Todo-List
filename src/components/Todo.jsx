import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'

const Todo = () => {

const {handleChange,submit,item1} = useContext(Context)



  return (
    <div className='flex items-center justify-center flex-col w-full'>
     <h1 className='uppercase font-semibold text-white text-[40px]'>todo list</h1>
      <form className='flex justify-center rounded-2xl items-center flex-col gap-7 p-9 bg-white w-[80%] ' onSubmit={submit}>
        <input value={item1.value} className='border-b-4 outline-none  w-60' placeholder='What would you like to do' type="text" onChange={handleChange} /> 
        <button className='w-36 p-2 text-white rounded-2xl bg-orange-600'>Add</button>
      </form>
   
    </div>
  )
}

export default Todo
