


import React from 'react'





export default function Post({element,index,handleclick,isopen}) {
    
    


    return (
        
           <div className='ac-card'>
            <div className={`control ${isopen ===index? "high":""} `} onClick={()=>{handleclick(index)}}>
            <h3>{element.title}</h3>
            
            {isopen ===index ?
            <h3 className='fa ' >-</h3> :
            <h3 className='fa ' >+</h3> }
            </div >

            {isopen===index? <p>{element.paragraph}</p>:""}
            </div>
        
    )
}
