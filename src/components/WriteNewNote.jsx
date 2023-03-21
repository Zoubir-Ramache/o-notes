import React from 'react'
import Editor from './Editor'
export default function WriteNewNote() {
  return (
    <>
    <div className=' flex   flex-col gap-4'>
      <input className='    text-secondary font-bold xl:mt-4 xl:h-12 text-center mx-4 capitalize rounded-md z-10 focus:border-secondary focus:border-2 h-10' placeholder='title'/>

      <div className=' flex   justify-center w-full relative'>
      <Editor/>
      </div>
      <button className=' btn  btn-secondary   w-32 m-4  p-4'> save</button>

    </div>
    <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> 
    </>
    )
}
