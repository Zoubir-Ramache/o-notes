import React from 'react'
import Home from './Home'
import Sidebar from './components/Sidebar'
import { useEffect } from 'react'
import { useStateContext } from './context/MyFirstProvider'
export default function App() {
  const {ActiveSidebar , setScreenSize , ScreenSize , theme} = useStateContext()
  useEffect(()=>{
    setScreenSize(window.innerWidth)
} , [ScreenSize , setScreenSize])

    
  return (
    <div className=' ' data-theme={theme}>
     {(ScreenSize>=900  || ActiveSidebar) && <Sidebar/>}
      <Home/>
    </div>
  )
}
