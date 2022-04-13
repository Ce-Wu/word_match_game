import React, { useEffect, useState } from 'react'


const Result = ( {className} ) => {
  
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    setUsername(localStorage.getItem("username"))
  });

  return (
    <div className={className}>
        <div className='result-wrapper'>
          <h1>Grats {username}</h1>
          <h1>Your score is:</h1>
          <h1></h1>
        </div>
    </div>
  )
}

export default Result