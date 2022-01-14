

import "./accordion.css"
import React from 'react'
import { useState } from 'react'
import Accordion from "./Accordion";



const data =[
    {
        title:"Card 1",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente commodi sequi numquam repellendus blanditiis accusantium dignissimos enim ratione sed, dolorum excepturi perferendis, quaerat voluptate quos, iusto omnis aperiam est?"
    },
    {
        title:"Card 2",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente commodi sequi numquam repellendus blanditiis accusantium dignissimos enim ratione sed, dolorum excepturi perferendis, quaerat voluptate quos, iusto omnis aperiam est?"
    },{
        title:"Card 3",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente commodi sequi numquam repellendus blanditiis accusantium dignissimos enim ratione sed, dolorum excepturi perferendis, quaerat voluptate quos, iusto omnis aperiam est?"
    },
]
export default function AccordionBox() {
    
    const [isopen, setisopen] = useState(null)
    const [direction, setdirection] = useState(null)

    function handleDirection(number){
        if (direction===number){
            setdirection(null)
        }else{
        setdirection(number)}
    }
    function handleclick(index){
            setisopen(index)    
        
    }
    
    return (
        <section className='main-sec'>
            <h1>Accordions</h1>
             <div className='accordions'>
            {data.map((element,index)=>{
                return (
                    <Accordion element={element} index={index} key={index} handleclick={handleclick} isopen={isopen}  handleDirection={handleDirection} direction={direction}></Accordion>
                )
            })}
            </div>
</section>
    )
}