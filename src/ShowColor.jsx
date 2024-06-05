import React from 'react'
import { useParams, Link } from 'react-router-dom'

function ShowColor ({colors}) {
    const {color} = useParams()
    console.log('ShowColor', color)
    

    return (
        <>
        <div style={{backgroundColor: color, width:800, height:800}}>

        </div>
        <Link to='/' >Go Back</Link>
        </>
    )
}



export default ShowColor