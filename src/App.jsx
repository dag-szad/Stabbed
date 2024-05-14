import React, { useState, useEffect, useRef } from 'react';

import { Bases } from './assets/visualizer/bases/Bases.jsx'
import { Earring } from './assets/visualizer/earrings/Earring.jsx'
import { BaseSelector } from './assets/visualizer/bases/BaseSelector.jsx'
import { EarringSelector } from './assets/visualizer/earrings/EarringSelector.jsx'
import { FlipButton } from './assets/visualizer/bases/FlipButton.jsx'
import './App.scss'

function App() {
  const [base, setBase] = useState({ type: 'ear' })
  const [selectedEarrings, setSelectedEarrings] = useState([])
  const [isRotated, setIsRotated] = useState(false)
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  })

  const changeBase = (newBase) => {
    setBase(newBase)
  }

  const addEarring = (earring) => {
    setSelectedEarrings([...selectedEarrings, earring])
  }

  const handleImgFlip = () => {
    setIsRotated(!isRotated)
  }

  return (
<div>
      <BaseSelector changeBase={changeBase} />
      <Bases
        selectedBase={base}
        isRotated={isRotated}
        setContainerDimensions={setContainerDimensions}
      />
      <EarringSelector addEarring={addEarring} />
      {selectedEarrings.map((earring, index) => (
        <Earring
          key={index}
          earring={earring}
          isRotated={isRotated}
          containerDimensions={containerDimensions}
        />
      ))}
      <FlipButton onClick={handleImgFlip} />
    </div>
  )
}

export default App
