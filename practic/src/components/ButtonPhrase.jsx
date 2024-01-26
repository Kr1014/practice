import React from 'react'
import randomIndex from '../services/randomIndex'
import phrases from '../utils/phrases.json'
import bgBody from '../utils/bgBody.json'

const ButtonPhrase = ({setQuote, setBgImage}) => {

    const handleButton = () =>{
        const sentence = randomIndex(phrases)
        const change = randomIndex(bgBody)
        setQuote(sentence)
        setBgImage(change)
    }

  return (
    <button onClick={handleButton}>Prueba tu suerte</button>
  )
}

export default ButtonPhrase