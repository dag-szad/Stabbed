import React, { useState, useEffect } from 'react'
import styles from './Earring.module.scss'

const Earring = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging) return

      setPosition({
        x: event.clientX - offset.x,
        y: event.clientY - offset.y,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, offset])

  const handleMouseDown = (event) => {
    setIsDragging(true)
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    })
  }

  const style = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
    cursor: isDragging ? 'grabbing' : 'grab',
  }

  return (
    <p style={style} className={styles.earring} onMouseDown={handleMouseDown}>
      🟡
    </p>
  )
}

export { Earring }