import React from 'react'

const JobRow = () => {
  return (
    <>
    <div className='bg-white p-4 rounded-lg shadow-sm'>
      <div className='flex grow gap-4'>
      <div className='content-center'>
        <img className='size-12' src="../wh.png" alt="" />
      </div>
      <div className='grow sm:flex'>
        <div className='grow'>
        <div className='text-gray-500 text-sm'>Whatsapp</div>
        <div className='font-bold text-lg mb-1'>Web Dev</div>
        <div className='content-end text-sm
           text-gray-400'>Remoto &middot; Luanda, Angola &middot; Full-time</div>
        </div>

           <div className='content-end text-sm text-gray-500'>Há 2 Semanas</div> 
        
        </div>
     
      

      </div>
      
      </div>
    </>
  )
}

export default JobRow