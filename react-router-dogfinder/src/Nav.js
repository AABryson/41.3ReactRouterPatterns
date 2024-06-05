import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import DogDetails from './DogDetails'


//???????????????????????????
function Nav({dogs}) {
    //?????????????????????????
    console.log('Nav page')
    let {eachDog} = dogs
    console.log(eachDog)

    // let dogNames = []
    // //#############################
    // for(let i =0; i < dogs.length; i++) {
    //     let dog = dogs[i];
    //     dogNames.push(<li>{dog.name}</li>)
    
    // }
    return (
    <>
    <nav>
        <ul>
        {eachDog.map((dog, index) => (
                    <li key={index}>
                        <Link to={`/dogdetails/${dog.name}`}>{dog.name}</Link>
                    </li>
                ))}
        </ul>
    </nav>
    {/*########################################################################################################################################################################DIDNT WORK WHEN I DEFINED THE ROUTE HERE; HAS TO BE IN APP.JS APPARENTLY}
    {/* <Routes>
        <Route path='/dogdetails/:name' element={<DogDetails dogs={dogs}/>} />

    </Routes> */}
    </>
    )
    
}

export default Nav