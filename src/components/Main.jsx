import React from 'react'
import Todos from './Todos'
import ListCount from './ListCount'

const Main = () => {

  return (
    < >
      <div className=' max-h-64 overflow-y-auto scrollbar scrollbar-corner-neutral-400  p-5 pb-4 bg-gray-700  h-full relative !w-[66.6%] rounded-[10px] '>
        <div className='flex justify-center items-center'>
          <div className='w-[20%] text-xl bg-gray-700 fixed mt-[26px] border-b-[7px] border-gray-500 flex justify-between items-center'>
            <div><p className='p-4  text-blue-400'>List</p></div>
            <div className='flex p-4 text-fuchsia-400 justify-between items-center gap-5' >
              <p>Edit</p>
              <p>Delete</p>
            </div>
          </div>
        </div>
        <Todos /> 
      </div>
      <ListCount />
    </>

  )
}

export default Main
