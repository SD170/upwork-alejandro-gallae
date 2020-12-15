import React,{useState,useEffect} from 'react'

function Timeline({items}) {
    return (
        <div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {items.map((item) => (
                    <div key={item} style={{width:'50vw',height:'50%'}}>
                        <img src={`https://api.systemagency.com${item.img}`} width="40vw" height="auto"/>
                        <b> {item.talentName} </b>
                        <br/>
                        <text> {item.clientName} </text>
                        <br />
                        <text> Stylist : { item.Stylist===null ? 'Not Found' : item.Stylist} </text>
                        <br />
                        <text> Photographer : {item.Photographer === null ? 'Not Found' : item.Photographer} </text>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline
