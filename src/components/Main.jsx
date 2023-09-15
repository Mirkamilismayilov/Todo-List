import React from 'react'
import Todos from './Todos'
import ListCount from './ListCount'


const Main = () => {
  
  return (
    <div className=' bg-[#F7F7FF] h-full relative   !w-[550px] rounded-b-2xl '>
         
        <div className='flex justify-center items-center'>
          
            <div className='w-[80%] bg-slate-400  mt-2  flex justify-between items-center'>
         <div><p className='p-6'>List</p></div> 
          <div className='flex p-6 justify-between items-center gap-5' >
            <p>Edit</p>
          <p>Delete</p>
          </div>
          
        </div>
        
        </div>
       
      
     <Todos/>
      <ListCount/>
    </div>
  )
}

export default Main
