import React from 'react'


function Button({ buttonName, click, className }) {
   

  return (
    <div className="button-box">
        <button
        type='submit'
        className={className}
        >
          <span 
          onClick={click}
          >

          {buttonName}
          
          </span>
        </button>
    </div>
  )
}

export default Button