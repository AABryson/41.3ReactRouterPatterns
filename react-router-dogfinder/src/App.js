import './App.css';
// import Nav from './Nav'
import {Routes, Route} from 'react-router-dom'
import DogsList from './DogsList'
import DogDetails from './DogDetails'
//??????????????????????????????????
import whiskey from './whiskey.jpg'
import duke from './duke.jpg'
import perry from './perry.jpg'
//using App.defaultProps down below; havent' used before; apparently need to pass in dogs
function App() {
  console.log('App')
  let dogs = {eachDog: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
  ]
}
  return (
    <div className="App">
   
        

        <Routes>

          <Route path="/" element={<DogsList dogs={dogs}/>} />
          {/*#######################################*/}
          <Route path='/dogdetails/:name' element={<DogDetails dogs={dogs} /> } />
         
          
        </Routes>

    </div>
  );
  
}

{/* <Nav dogs={dogs} />  */}
 {/* <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} /> */}
    {/*???????????????????????????/*/}
          {/* <Route path='*' element={<Navigate to='/DogsList' />} /> */}


// App.defaultProps = {
//   dogs: [
//     {
//       name: "Whiskey",
//       age: 5,
//       src: whiskey,
//       facts: [
//         "Whiskey loves eating popcorn.",
//         "Whiskey is a terrible guard dog.",
//         "Whiskey wants to cuddle with you!"
//       ]
//     },
//     {
//       name: "Duke",
//       age: 3,
//       src: duke,
//       facts: [
//         "Duke believes that ball is life.",
//         "Duke likes snow.",
//         "Duke enjoys pawing other dogs."
//       ]
//     },
//     {
//       name: "Perry",
//       age: 4,
//       src: perry,
//       facts: [
//         "Perry loves all humans.",
//         "Perry demolishes all snacks.",
//         "Perry hates the rain."
//       ]
//     },
    // {
    //   name: "Tubby",
    //   age: 4,
    //   src: tubby,
    //   facts: [
    //     "Tubby is really stupid.",
    //     "Tubby does not like walks.",
    //     "Angelina used to hate Tubby, but claims not to anymore."
    //   ]
    // }
  // ]



export default App;
