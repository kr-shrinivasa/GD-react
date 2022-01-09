

import "./accordion.css"
import React from 'react'
import Post from "./Post";


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
export default function Accordion() {
    
    // const [isopen, setisopen] = useState(null)

    // function handleclick(index){
    //     console.log(index);
    //     if (isopen===index){
    //         setisopen(null)
    //     }else{
    //     setisopen(index)    
    // }}
    
    return (
        <section className='main-sec'>
            <h1>Accordions</h1>
             <div className='accordions'>
            {data.map((element,index)=>{
                return (
                    <Post element={element} index={index} key={index}  ></Post>
                )
            })}
            </div>
</section>
    )
}
