import React, { useEffect, useRef } from 'react'
import styles from './Bases.module.scss'

const Bases = ({ selectedBase, isRotated, setContainerDimensions }) => {
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect()
      setContainerDimensions({ width, height })
    }
  }, [selectedBase, setContainerDimensions])

  const renderBase = () => {
    if (selectedBase.type === 'custom') {
      return selectedBase.url
    } else {
      return `src/assets/visualizer/bases/${selectedBase.type}.png`
    }
  }

  const source = renderBase()

  const classes = `${styles.img} ${isRotated ? styles.rotated : ''}`

  return (
    <div className={styles.dropspace}>
      <img ref={imgRef} src={source} alt="Piecing base" className={classes} />
    </div>
  )
}

export { Bases }