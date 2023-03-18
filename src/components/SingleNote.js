import React from 'react'

export default function SingleNote() {
  return (
    
    <div className="card w-80  inline-block m-2 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">note title!</h2>
        <p>your text will be here </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">edit</button>
          <button className="btn btn-primary">delete</button>

        </div>
      </div>
    </div>
  )
}
