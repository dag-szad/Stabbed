import iconLogo from './icon-logo.svg'
import styles from './Logo.module.scss'

const Logo = ({ colorVariant }) => {
  const classes = `${styles.logo} ${styles[colorVariant]}`

  return (
    <div>
      <img src={iconLogo} className={classes} alt="Logo" />
    </div>
  )
}

export { Logo }