import React from 'react'
import SingleNote from './SingleNote'
export default function Notes() {

    // !this is only for testing 
    let array =[]
    for (let index = 0; index < 100; index++) {
      const element = `${index}`;
      array.push(element)
      
    }
  return (
    

    <div className=' '>
      {array.map((item)=><SingleNote key={item} title={item}/>)}
 
   

    </div>
    
  )
}
