import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function ColorForm({updateParentState}) {
    console.log('ColorForm')
    const navigate = useNavigate()
    const [inputValue, setinputValue] = useState('')

    let handleChange = (e) => {
        setinputValue(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        updateParentState(inputValue);
        navigate('/')

    }

    return (
        <>
        <form onSubmit={handleSubmit} >
            <label htmlFor='addColor'>Add Color</label>
            <input type='text' value={inputValue} onChange={handleChange} id='addColor'></input>
            <button type='submit'>Submit</button>
        </form>
        {/*##############################################*/}

        {/* <Routes>

        </Routes> */}
        </>
    )
}

export default ColorForm