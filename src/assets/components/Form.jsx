import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handlesubmitdata}) {
    const {register,handleSubmit,reset} = useForm()
    const  handleSubmitform = (data)=>{
        handlesubmitdata(data)
        reset();
    } 

  return (
    <div className='mt-10 flex justify-center gap-10 '>
        <form className='flex gap-10' onSubmit={handleSubmit(handleSubmitform)} action="">
            <input {...register("name")} className='outline-none px-2 py-1 text-base font-semibold rounded-md' type="text" placeholder='name'/>
            <input {...register("email")} className='outline-none px-2 py-1 text-base font-semibold rounded-md' type="text" placeholder='email'/>
            <input {...register("image")} className='outline-none px-2 py-1 text-base font-semibold rounded-md' type="text" placeholder='image url'/>
            <input  className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' value='submit' type="submit" />
        </form>
    </div>
  )
}

export default Form