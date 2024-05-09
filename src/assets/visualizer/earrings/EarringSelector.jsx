import React, { useState, useEffect } from 'react'
import earringsList from './earrings.json'

const EarringSelector = ({ addEarring }) => {
  const handleEarringClick = (earring) => {
    addEarring(earring)
  }

  return (
    <div>
      {earringsList.map((element) => (
        <button
          key={element.id}
          type="button"
          onClick={() => handleEarringClick(element.earring)}
        >
          {element.earring}
        </button>
      ))}
    </div>
  )
}

export { EarringSelector }
