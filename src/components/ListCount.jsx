import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'

const ListCount = () => {
  const { listCount, completedCount, AllDelete } = useContext(Context)
  return (
    <div className='flex mt-5  justify-center items-center  h-12 w-[66.6%] rounded-[10px] p-5 pt-8 pb-8 bg-gray-700 bg-opacity-80'>
      <div className='flex justify-between items-center p-2  w-[80%]'>
        <div className='flex items-center gap-4'>
          <div className=' w-12 flex justify-between items-center'><span className=' text-fuchsia-400'>List:</span><span className='text-white'>{listCount}</span></div>
          <div className=' w-24 flex justify-between items-center'><span className=' text-fuchsia-400'>Completed:</span><span className='text-white'>{completedCount}</span></div>
        </div>
        <div className='' >
          <button onClick={() => AllDelete()} className='p-2 rounded-xl border-2 text-white border-blue-400 hover:bg-gray-600'>Delete All</button>
        </div>
      </div>
    </div>
  )
}

export default ListCount
