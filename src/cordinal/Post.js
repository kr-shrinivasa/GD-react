


import React from 'react'
import { useState } from 'react'





export default function Post({element,index}) {
    
    const [isopen, setisopen] = useState(false)


    return (
        
           <div className={`ac-card ${isopen? "ac-card-after":""} `}>
            <div className={`control ${isopen? "high":""} `} onClick={()=>{setisopen(!isopen)}}>
            <h3>{element.title}</h3>
            
            {isopen  ?
            <h3 className='fa' >-</h3> :
            <h3 className='fa' >+</h3> }
            </div >

            {isopen? <p>{element.paragraph}</p>:""}
            </div>
        
    )
}
