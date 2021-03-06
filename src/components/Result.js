import React, { useEffect, useState } from 'react'
import '../styles/result.scss'


const Result = ( {className, score} ) => {
  
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    setUsername(sessionStorage.getItem("username"))
  });

  return (
    <div className={className}>
        <div className='result-wrapper'>
          <h1>Congratulations {username}!</h1>
          <h1>Your score is:</h1>
          <h1 className='score'>{score}</h1>
        </div>
    </div>
  )
}

export default Result