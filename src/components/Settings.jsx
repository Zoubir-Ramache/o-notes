import React from 'react'
import { useStateContext } from '../context/MyFirstProvider'
export default function Settings() {
  
  const {theme , setTheme} = useStateContext()
  const Mytehmes =["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
                    "cyberpunk", "valentine", "halloween",
                   "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
                  "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night",
                  "coffee", "winter"]
  return (
    <>

    <h1 className=' ml-4 mt-2  font-bold  text-primary-content  text-xl'> choose your theme : </h1>

{/* if you want to use the drop down with more styles in the future  */}
  {/* <div className="  dropdown dropdown-right">
  <label tabIndex={0} className="btn m-1">{theme}:</label>
   <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
   {Mytehmes.map((theme)=><li key={theme} onClick={()=>{setTheme(theme)}}><a> {theme}</a></li>
    )}
  </ul>
    </div> */}

    <select className="select select-secondary  text-lg  text-primary w-full ml-10 mt-4 max-w-xs">
         <option disabled selected>theme</option>

          {Mytehmes.map((theme)=>{
            return <option onClick={()=>setTheme(theme)}> {theme}</option>
          })}
    </select>




    {/* hahahahah this is only for making the site resposive hhhhhhhhh 😅   */}
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    </>
  )
}
