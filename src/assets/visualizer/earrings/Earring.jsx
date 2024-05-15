import React, { useState, useEffect } from 'react'
import styles from './Earring.module.scss'

const Earring = ({ earring, index, isRotated, containerDimensions }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging) return

      const rotatedX = event.clientX - offset.x
      const rotatedY = event.clientY - offset.y

      const { width, height } = containerDimensions
      const rotatedPosition = isRotated
        ? {
            x: width - rotatedX,
            y: rotatedY,
          }
        : {
            x: rotatedX,
            y: rotatedY,
          }

      setPosition(rotatedPosition)
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
  }, [isDragging, offset, isRotated, containerDimensions])

  const handleMouseDown = (event) => {
    setIsDragging(true)

    const offsetX = event.clientX - rotatedPosition.x
    const offsetY = event.clientY - rotatedPosition.y

    setOffset({ x: offsetX, y: offsetY })
  }

  const rotatedPosition = isRotated
    ? {
        x: containerDimensions.width - position.x,
        y: position.y,
      }
    : position

  const style = {
    position: 'absolute',
    top: `${rotatedPosition.y}px`,
    left: `${rotatedPosition.x}px`,
    cursor: isDragging ? 'grabbing' : 'grab',
  }

  return (
    <p
      style={style}
      className={styles.earring}
      onMouseDown={handleMouseDown}
      key={index}
    >
      {earring}
    </p>
  )
}

export { Earring }