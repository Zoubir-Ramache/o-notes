import React from 'react'
import {  useNavigate , useLocation} from 'react-router-dom'
import { useStateContext } from '../context/MyFirstProvider'
import {GoX} from "react-icons/go"
import Micro from './Micro'

export default function Sidebar() {
  const { setActiveSidebar , ScreenSize } =useStateContext()
  const navigate =useNavigate()

  const {pathname}= useLocation() 

  return (
    <>
   {ScreenSize>900 && <div className='w-80 h-screen  inline-block overflow-hidden'></div>}
   <div className={` border-r-8 border-secondary   rounded-badge bg-base-100 inline-block w-80   top-0 left-0 h-screen fixed  overflow-scroll z-30  `}>
     {ScreenSize<=900 && <button className='btn  btn-circle absolute shadow-lg top-1 right-1 z-10' onClick={()=>setActiveSidebar(false)}><GoX size={25}/></button>}
      
    {/* <Link to={'/'}>my notes </Link> */}
    {/* <Link to={'WriteNote'}> write a new note </Link> */}
    {/* i used the navigate hook  instead of the link cause i needed to the button for the style  + they both works the same way  */}

    <button className={`btn btn-primary block mt-10 ml-3 focus:btn-info ${pathname === '/' && 'btn-info'}   `} onClick={()=> {
      navigate('/')
      window.scrollTo(0 ,0)
      setActiveSidebar(false)
      }}> My notes</button>
  
    <button className={`btn btn-primary block mt-10 ml-3 focus:btn-info ${pathname === '/WriteNote' && 'btn-info'}   `} onClick={()=>{
      navigate('WriteNote')
      window.scrollTo(0 ,0)
      setActiveSidebar(false)
       }}>  new note </button>
   
    <button className={`btn btn-primary block mt-10 ml-3 focus:btn-info ${pathname === '/Settings' && 'btn-info'}   `} onClick={()=>{
            window.scrollTo(0 ,0)
            setActiveSidebar(false)      
            navigate('Settings')
      }}>Settings</button>


        <Micro/>
    </div>
    </>
  )
}
