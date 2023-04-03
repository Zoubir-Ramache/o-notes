import React from 'react'
import {  useNavigate , useLocation} from 'react-router-dom'
export default function SingleNote({title }) {
  const navigate = useNavigate()
  return (
    
    <div  className="card w-80   shadow-accent inline-block m-2 bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">note {title}</h2>
        <p>your text will be here </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"  onClick={()=>{
      navigate('WriteNote')
      window.scrollTo(0 ,0)
      console.log('testt')
          }}>edit</button>
          <button className="btn  btn-warning">delete !</button>

        </div>
      </div>
    </div>
  )
}
