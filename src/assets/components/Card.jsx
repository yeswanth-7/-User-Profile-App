import React from 'react'

function Card({user,handleremove,id}) {
  return (
    <>
        <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center  p-2' >
            <div className='image w-[3vw] h-[3vw] bg-zinc-300 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={user.image} alt="" />
            </div>
            <h1 className='mt-1 text-xl font-semibold text-center'>{user.name}</h1>
            <h2 className='opacity-60 text-xs font-semibold'>{user.email}</h2>
            <p className=' mt-1 text-center text-sm leading-1 font-semibold tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos autem illo.</p>
            <button className='px-3 py-1 bg-red-600 rounded-md text-white mt-4 ' onClick={()=> handleremove(id)}>Remove it</button>
        </div>
    </>
  )
}

export default Card