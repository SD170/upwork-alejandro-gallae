import React,{useState,useEffect} from 'react'
function Carousel({items}) {
    return (
        <ul style={{ display: 'flex', margin:0,padding:0,overflow:'hidden'}}>
        {items.map((item)=>(
            <li key={item} style={{display:'block',listStyle:'none'}}> <img  style={{width:'100%'}} src={`https://api.systemagency.com${item}`} /> </li>
            
        ))}
        </ul>
    )
}

export default Carousel;
