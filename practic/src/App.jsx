// import { useState } from 'react'
import './App.css'
import randomIndex from './services/randomIndex'
import phrases from './utils/phrases.json'
import RandomPhrase from './components/RandomPhrase'
import ButtonPhrase from './components/ButtonPhrase'
import { useState } from 'react'
import bgBody from './utils/bgBody.json'

function App() {

  const sentence = randomIndex(phrases)
  const bgImg = randomIndex(bgBody)

  const [quote, setQuote] = useState(sentence)
  const [bgImage, setBgImage] = useState(bgImg)

const bgStyle = {
  backgroundImage : `url('../assets/fondo${bgImage}.jpg')`
}

  return (
    <>
    <div className='container-all' style={bgStyle}>
      <div className='container'>
          <h1 >GALLETAS DE LA FORTUNA</h1>
          <RandomPhrase
            quote = {quote}
          />
          <ButtonPhrase
            setQuote = {setQuote}
            setBgImage = {setBgImage}
          />
        </div>
    </div>
      
    </>
  )
}

export default App
