import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'



function ColorList({colors}) {
    console.log('ColorList component')
   
    
    
    


    // let linkColors = []

    // for(let color of colors) {
    //     linkColors.push(<li><Link to={`colors/${color}`} >{color}</Link></li>)
    // }


    const linkColors = colors.map(color => {
        return <li key={uuid()}><Link to={`colors/${color}`}>{color}</Link></li>
    })

    


   

    
    


    return (
        <>
        <ul>
            {linkColors}

            {/*instead of button and navigate, use Link*/}
            <Link to='/colors/form'>Add Color</Link>
            {/* <button onClick={() => navigate('colorform', {updateParentState : {updateParentState}})}>Add Color</button> */}
            {/* <button onClick={() => navigate('colorform')}>Add Color</button> */}
        </ul>
        

        
        </>
    )
}


export default ColorList