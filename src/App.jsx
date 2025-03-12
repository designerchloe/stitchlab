import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>StitchLab</h1>
      <h2>Build your very own knit & crochet tapestry patterns using pre-built mini motifs.</h2>
    </div>
  )
}

export default App
