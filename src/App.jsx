import { useState } from 'react';
import './App.css';
import Nav from './Nav.jsx';
import CanvasContainer from './CanvasContainer.jsx';
import MotifsContainer from './MotifsContainer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-container">
      <header>
        <div className="title-container">
          <h1>StitchLab</h1>
          <h2>Build your very own knit & crochet tapestry patterns using pre-built mini motifs.</h2>
        </div>
        <Nav selected="design"/>
      </header>
      <div className="main-container">
        <MotifsContainer/>
        <CanvasContainer/>
      </div>
    </div>
  )
}

export default App
