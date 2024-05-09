import React, { useState, useEffect } from 'react'

import { Bases } from './assets/visualizer/bases/Bases.jsx'
import { Earring } from './assets/visualizer/earrings/Earring.jsx'
import { BaseSelector } from './assets/visualizer/bases/BaseSelector.jsx'
import { EarringSelector } from './assets/visualizer/earrings/EarringSelector.jsx'
import './App.scss'

function App() {
  const [base, setBase] = useState('ear');
  const [selectedEarrings, setSelectedEarrings] = useState([]);

  const changeBase = (newBase) => {
    setBase(newBase);
  }

  const addEarring = (earring) => {
    setSelectedEarrings([...selectedEarrings, earring])
  }

  return (
    <div>
      <BaseSelector changeBase={changeBase} />
      <Bases id="dropspace" selectedBase={base} />

      <EarringSelector addEarring={addEarring}/>
      {selectedEarrings.map((earring, index) => (
        <Earring key={index} earring={earring} />
      ))}
    </div>
  )
}

export default App
