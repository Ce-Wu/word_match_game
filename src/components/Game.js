
import React, { useState, useEffect } from 'react'
import Button from './Button'
import Result from './Result'
import '../styles/game.scss'

const Game = ({}) => {

  const [allWords, setAllWords] = useState([])
  const [goodWords, setGoodWords] = useState([])
  const [question, setQuestion] = useState(null)

  const ENDPOINTS = ['https://api.jsonbin.io/b/6258878380883c3054e1aa02', 'https://api.jsonbin.io/b/625868f180883c3054e1a25c', 'https://api.jsonbin.io/b/625883f2bc312b30ebe77d8a']
  const random = ENDPOINTS[Math.floor(Math.random() * ENDPOINTS.length)]
  

  const randomData = () => {
    fetch(random)
    .then((response) => response.json())
    .then((data) => {
      setAllWords(data.all_words)
      setGoodWords(data.good_words)
       setQuestion(data.question)
     });
  }

   const randomMargin = {
    margin: `${Math.floor(Math.random() * 45 + 20)}px`,
  }
  
  useEffect(() => {
    randomData()
  }, []);

  const [arrAllWords, setArrAllWords] = useState([])
  const goodWordsArr = [goodWords]
  const [changeButton, setChangeButton] = useState('')
  const [activeFinishButton, setChangeActiveFinishButton] = useState('inactive')
  const [showResultComponent, setChangeResultComponent] = useState('inactive')
  const [score, setScore] = useState(0)
  const [disactive, setDisactive] = useState('app-wrapper')
  
  const handleName = (e) => {
    const nameAttribute = e.target.id
    e.currentTarget.classList.toggle('gray')
    if (e.currentTarget.classList.contains('gray')) {
      arrAllWords.push(e.target)
    } else {
      setArrAllWords(arrAllWords.filter((item) => item.id !== nameAttribute))
    }
  }
  


  const checkResults=()=> {
      let result = arrAllWords.filter(wordsArr => goodWordsArr[0].some(wordsResult => wordsArr.innerText === wordsResult))

      if (result.length > 0) {
        arrAllWords.forEach(el => el.classList.add('red'))
        arrAllWords.forEach(el => el.style.setProperty('--showPseudoClassTextBad', 'block'))
        
        result.forEach(el => el.style.color= 'green')
        result.forEach(el => el.style.setProperty('--showPseudoClassTextGood', 'block'))
        setScore((((result.length) * 2 ) - ((arrAllWords.length - result.length) + (goodWordsArr[0].length - result.length))))
  
      } else  {
        arrAllWords.forEach(el => el.classList.add('red'))
        arrAllWords.forEach(el => el.style.setProperty('--showPseudoClassTextBad', 'block'))
    }
    setChangeButton('inactive')
    setChangeActiveFinishButton('active')
  }
  
  const activeResults = () => {
    let result = arrAllWords.filter(wordsArr => goodWordsArr[0].some(wordsResult => wordsArr.innerText === wordsResult))
    result.forEach(el => el.style.setProperty('--showPseudoClassTextGood', 'none'))

    setChangeResultComponent('active-result')
    setChangeActiveFinishButton('inactive')
    setDisactive('inactive')
  }

  return (
    <div className="container">
      <h1>{question}</h1>
      <div className={disactive}>
        {allWords.map((word) => (
          <span
        
            key={word}
            id={word}
            name={word}
            style={randomMargin}
            onClick={handleName}
          >
            {word}
          </span>
        ))}

      </div>
      <Button 
      className={changeButton}
      buttonName='check answers' 
      click={checkResults}
      />
      <Button
      className={activeFinishButton}
      buttonName='finish game' 
      click={activeResults}
      />
      <Result
        score={score}
        className={showResultComponent}/>
    </div>
  )
}

export default Game

