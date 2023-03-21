import React from 'react'
import { useStateContext } from '../context/MyFirstProvider'
import Search from './Search'
import {BiSearchAlt2} from "react-icons/bi"
import {GoThreeBars} from "react-icons/go"
export default function Navbar() {

  const {ActiveSidebar , setActiveSidebar , ScreenSize} = useStateContext()

  return (
    <>
    <div className={`navbar ${ScreenSize <700 && 'fixed'} z-20  bg-base-300`}>
    <div className="flex-1">
     
    {ScreenSize < 900 && ! ActiveSidebar &&<button onClick={()=>setActiveSidebar(true)} className="btn   normal-case text-xl"><GoThreeBars/></button>}
    <button className="btn btn-ghost  normal-case text-xl "   >LOGO</button>
    </div>
    
    
    {ScreenSize>500 ? <Search/> : (<button className='btn btn-ghost   btn-circle mr-2 '>
      <BiSearchAlt2 size={25}/>
      </button>)}

    <div className="flex-none gap-2 ">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
          <div className=" rounded-full">
            <button  className='btn  btn-circle btn-primary'></button>
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <button className="justify-between">
              Profile
              {/* this is from daisy ui library , maybe you will need it later  <span className="badge">New</span> */}
            </button>
          </li>
          <li><button>Settings</button></li>
          <li><button>Logout</button></li>
        </ul>
      </div>
    </div>
  </div> 
    </>
  )}
