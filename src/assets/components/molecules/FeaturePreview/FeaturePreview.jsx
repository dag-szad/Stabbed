import styles from './FeaturePreview.module.scss'

const FeaturePreview = ({ photo, alt, title, description }) => {
  return (
    <div className={styles.feature}>
      <img src={photo} alt={alt} className={styles.feature__image} />
      <h3 className={styles.feature__title}>{title}</h3>
      <p className={styles.feature__text}>{description}</p>
    </div>
  )
}

export { FeaturePreview }