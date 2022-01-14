


import React from 'react'
import "./accordion.css"




export default function Accordion({element,index,handleclick,isopen, handleDirection,direction}) {

        let open=""

    switch(direction){
        case 1:
            open="right";
            break
        case 2:
            open="left"
            break
        case 3:
            open="top"
            break
        case 4:
            open="bottom"
            break
        default:
            open=""

    }


    return (
        
           <div className={`ac-card  ${isopen ===index && open }`} >

            <div className={`control  ${isopen ===index? "high":""} `} onClick={()=>{handleclick(index)}}>

            <h3>{element.title}</h3>
            <div className='directions'>
            <i class="fa fa-angle-left" onClick={()=>{handleDirection(2)}}></i>
            <i class="fa fa-angle-right" onClick={()=>{handleDirection(1)}}></i>
            <i class="fa fa-angle-up" onClick={()=>{handleDirection(3)}}></i>
            <i class="fa fa-angle-down" onClick={()=>{handleDirection(4)}}></i>
            </div>
            </div >
            {isopen===index?
            <p className="">{element.paragraph}</p>:""}

            </div>
        
    )
}