import React from 'react'
import {  Route , Routes } from 'react-router-dom';
import Notes from './components/Notes'
import WriteNewNote from './components/WriteNewNote';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import { useStateContext } from './context/MyFirstProvider';
export default function Home() {
  const {ScreenSize} =useStateContext()
  return (
      <div className=' bg-primary inline-block  overflow-y-scroll absolute min-h-screen '>
        
        <Navbar/>
        <div className={`${ScreenSize <700 && 'mt-20 '}`}>

          <Routes>
            <Route path='/' element={<Notes/>}/> 
            <Route path='/WriteNote' element={<WriteNewNote/>}/>
            <Route path='Settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
  )
}
