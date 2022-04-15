import React, { useState, useEffect } from 'react'
import Button from './Button'
import Game from './Game'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '../styles/login.scss'

function Login({  }) {
  const stopPrevDef = (e) => {
    e.preventDefault()
  }

  const [active, setActive] = useState('active')

  const activeOn = () => {
    setActive('inactive')
  }

  const [username, setUsername] = useState("");
  const buttonName = 'play'

useEffect(() => {
  sessionStorage.setItem('username', username);
});

  return (
    <BrowserRouter>
            <div className="login-container">
        <form 
          onSubmit={stopPrevDef}
          >
          <label>Wordcloud game</label>
          <input 
          type="text" 
          placeholder="Enter your nickname here..." 
          onChange={(e) => setUsername(e.target.value) }
          />
          <Link 
            to="/game">
            <Button 
              buttonName={buttonName}
              className={active}
              click={activeOn}
              />
          </Link>

           
          <Routes>
            <Route path="game" element={<Game />}>
            </Route>
          </Routes>
        </form>
      </div>
    </BrowserRouter>
  )
}

export default Login
