import React, { useState } from 'react'
import Cards from './assets/components/Cards'
import Form from './assets/components/Form'

function App() {
  const [users,setusers] = useState([])

  function handlesubmitdata(data){
    setusers([...users,data])
  }

  const handleremove = (id)=>{
    setusers(()=>users.filter((item,index)=> index!=id))
  }

  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
      <div className='container mx-10'>
          <Cards handleremove={handleremove} users={users}/>
          <Form  handlesubmitdata={handlesubmitdata}/>
      </div>
    </div>
  )
}

export default App