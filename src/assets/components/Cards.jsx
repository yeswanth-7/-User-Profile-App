import React from 'react'
import Card from './Card'

function Cards({users,handleremove}) {
  return (
    <div className='w-full max-h-96   flex-wrap overflow-auto flex justify-center gap-4 p-4 '>
        {users.map((item,index)=>{
            return (<Card handleremove={handleremove} key={index} id={index} user={item}/>)  
        })}
    </div>
  )
} 

export default Cards