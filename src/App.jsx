import React, { useState, useEffect } from 'react'

import { Bases } from './assets/visualizer/bases/Bases.jsx'
import { Earring } from './assets/visualizer/earrings/Earring.jsx'
import { BaseSelector } from './assets/visualizer/bases/BaseSelector.jsx'
import { EarringSelector } from './assets/visualizer/earrings/EarringSelector.jsx'
import './App.scss'

function App() {
  const [selectedBase, setSelectedBase] = useState('ear');
  const [selectedEarrings, setSelectedEarrings] = useState([]);

  const changeBase = (newBase) => {
    setSelectedBase({ ...newBase, fileWidth: newBase.width, fileHeight: newBase.height });
  };

  const addEarring = (earring) => {
    setSelectedEarrings([...selectedEarrings, earring])
  }

  return (
    <div>
      <BaseSelector changeBase={changeBase} />
      <Bases id="dropspace" selectedBase={selectedBase} />

      <EarringSelector addEarring={addEarring}/>
      {selectedEarrings.map((earring, index) => (
        <Earring key={index} earring={earring} />
      ))}
    </div>
  )
}

export default App
