
import React, { useState, useEffect } from 'react'
import Button from './Button'
import Result from './Result'
// import data from '../data'
import '../styles/game.scss'

const Game = ({}) => {
  const data = {
    question: 'select animals',
    all_words: [
      'hole',
      'sofa',
      'pear',
      'tiger',
      'oatmeal',
      'square',
      'nut',
      'cub',
      'shirt',
      'tub',
      'passenger',
      'cow',
    ],

    good_words: ['tiger', 'cow'],

    question: "select vehicles",
        all_words: [
          "belief",
          "wire",
          "car",
          "bus",
          "star",
          "river",
          "hat",
          "skirt",
          "train"
        ],
        good_words: [
          "car",
          "bus",
          "train"
        ],
        // question: "select colors",
        // all_words: [
        //   "jeans",
        //   "existance",
        //   "ink",
        //   "red",
        //   "blue",
        //   "yellow",
        //   "laugh",
        //   "behavior",
        //   "expansion",
        //   "white",
        //   "black",
        //   "cakes"
        // ],
        // good_words: [
        //   "red",
        //   "blue",
        //   "yellow",
        //   "white",
        //   "black"
        // ]
  }


console.log(data)
  const [arr, setArr] = useState([])
  
  const handleName = (e) => {
    const nameAttribute = e.target.id
    e.currentTarget.classList.toggle('gray')
    if (e.currentTarget.classList.contains('gray')) {
      arr.push(e.target)
    } else {
      setArr(arr.filter((item) => item.id !== nameAttribute))
    }
  }
  
  useEffect(() => {
    console.log(arr)
  }, [arr[0]])


  const goodWordsArr = [data.good_words]
  const [changeButton, setChangeButton] = useState('')
  const [activeButton, setChangeActiveButton] = useState('inactive')
  const [showResultComponent, setChangeResultComponent] = useState('inactive')
  const [score, setScore] = useState(0)


  const checkResults=()=> {
      let result = arr.filter(wordsArr => goodWordsArr[0].some(wordsResult => wordsArr.innerText === wordsResult))
      if (result.length > 0) {
        arr.forEach(el => el.classList.add('red'))
      result.forEach(el => el.style.color= 'green')
      setScore((result.length +1) * 2 - arr.length + 1)
      } else  {
        arr.forEach(el => el.classList.add('red'))
    }
    setChangeButton('inactive')
    setChangeActiveButton('active')
  }
  
  const randomMargin = {
    margin: `${Math.floor(Math.random() * 45 + 20)}px`,
  }

  const activeResults = () => {
    setChangeResultComponent('active')

  }

  return (
    <div className="container">
      <h1>{data.question}</h1>
      <div className="app-wrapper">
        {data.all_words.map((word) => (
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
      className={activeButton}
      buttonName='finish game' 
      click={activeResults}
      />
      <Result
        className={showResultComponent}/>
    </div>
  )
}

export default Game
