import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import ColorList from './ColorList'
import ShowColor from './ShowColor'
import ColorForm from './ColorForm'



function App() {
  console.log('App')
 
  let initialState = ['red', 'green', 'blue', 'orange']
  const [colors, setColors] = useState(initialState)

  let updateParentState = (color => {
    setColors(...colors, color)
})
  return (
    <>
    <Routes>
      <Route path='/' element={<ColorList colors={colors}/>} />

      <Route path='/colors/:color' element={<ShowColor colors={colors} />} />

      <Route path='/colors/form' element={<ColorForm udpateParentState={updateParentState} />} />
      {/*##############################################################originally had this in ColorList component; didn't work; i don't think you can define a route on the same page that you link to it*/}
      {/* <Route path='/colors/:color' element={<ShowColor />} />
      <Route path='/colorform' element={<ColorForm />} /> */}
      
    </Routes>

    </>
  )
}

export default App
