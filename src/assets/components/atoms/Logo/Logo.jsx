import iconLogo from './icon-logo.svg'
import styles from './Logo.module.scss'

const Logo = ({ colorVariant }) => {
  const classes = `${styles.logo} ${styles[colorVariant]}`

  return <img src={iconLogo} className={classes} alt="Logo" />
}

export { Logo }