import React, { useContext } from 'react'
import { Context } from '../context/TodoContext'

const ListCount = () => {
  const {listCount,completedCount,AllDelete} = useContext(Context)
  return (
    <div className='flex  mt-5 justify-center items-center'>
      <div className='flex justify-between items-center p-2 bg-green-500 w-[80%]'>
            <div className='flex items-center gap-4'>
         <div><p className=''>List: {listCount}</p></div> 
       <div><p>Completed: {completedCount} </p></div>  
</div>



<div className='' >
            
          <button onClick={()=>AllDelete()} className='bg-red-500 p-2 rounded-xl border-2'>AllDelete</button>
          </div>

      </div>


          
          
        
    </div>
  )
}

export default ListCount
