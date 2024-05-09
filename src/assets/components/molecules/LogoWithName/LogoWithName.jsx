import { Logo } from '../../atoms/Logo/Logo'
import styles from './LogoWithName.module.scss'

const LogoWithName = ({ colorVariant }) => {
  const classes = `${styles.name} ${styles[colorVariant]}`

  return (
    <div className={styles.logoName}>
      <Logo colorVariant={colorVariant} />
      <h2 className={classes}>Stabbed</h2>
    </div>
  )
}

export { LogoWithName }
