import styles from './FeaturePreview.module.scss'

const FeaturePreview = ({ photo, alt, title, description }) => {
  return (
    <div className={styles.feature}>
      <img src={photo} alt={alt} className={styles.feature__image} />
      <h3 className={styles.feature__title}>{title}</h3>
      <div className={styles.feature__description}>
        {description.map((line, index) => (
          <p key={index} className={styles.feature__text}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export { FeaturePreview }