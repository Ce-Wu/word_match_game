import React, { useState } from 'react'
import Result from './Result'

const Input = () => {

    const [handleInput, setHandleInput] = useState('')
  return (
    <div className='input'>
          <input 
          type="text" 
          placeholder="Enter your nickname here..." 
          onChange={(e) => setHandleInput(e.target.value) }
          />

         <Result passData={handleInput}/>
    </div>
  )
}

export default Input