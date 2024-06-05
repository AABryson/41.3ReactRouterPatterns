import {Routes, Route, Link} from 'react-router-dom'
import Nav from './Nav'
// import DogDetails from './DogDetails'
// import DogDetails from './DogDetails'
// import {Link} from 'react-router-dom'



function DogsList ({dogs}) {
    const {eachDog} = dogs
    console.log('DogsList')
    console.log(eachDog)

    return (
        <>
        <Nav dogs={dogs} />
        <h1>List of Dogs</h1>
        {/* <ul>
            <li><Link to={`/dogdetails/${eachDog[0].name}`}>{eachDog[0].name}</Link></li>
            <li><Link to={`/dogdetails/${eachDog[1].name}`} >{eachDog[1].name}</Link></li>
            <li><Link to={`/dogdetails/${eachDog[2].name}`}>{eachDog[2].name}</Link></li>
        </ul> */}
       
        </>
    )
}

export default DogsList




    // return (
    //     <>
    //     {/* <Nav dogs={dogs} /> */}
         
    //     <ul>
    //         <li><Link to={`/dogdetails/${eachDog[0]}`} />Whiskey</li>
    //         <li><Link to={`/dogdetails/${eachDog[1]}`} />Duke</li>
    //         <li><Link to={`/dogdetails/${eachDog[2]}`} />Perry</li>
    //         {/* <li>{eachDog[1]}</li>
    //         <li>{eachDog[2]}</li> */}
    //             {/* <Link to='DogDetails/perry'>Perry</Link> */}
    //     </ul>
    //     <Routes>
    //         <Route path='dogdetails/:name' element={<DogDetails />} />
    //         {/* <Route path='dogdetails/duke' element={<DogDetails />} />
    //         <Route path='dogdetails/perry' element={<DogDetails />} /> */}
    //     </Routes>
    //     </>
    // )
