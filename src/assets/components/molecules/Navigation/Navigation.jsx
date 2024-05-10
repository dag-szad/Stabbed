import styles from './Navigation.module.scss'

const Navigation = ({ destination, colorVariant }) => {
  const listClasses = `${styles.list} ${styles[destination]}`
  const itemClasses = `${styles.list__item} ${styles[colorVariant]}`

  return (
    <ul className={listClasses}>
      <li>
        <a className={itemClasses} href="#">
          Visualizer
        </a>
      </li>
      <li>
        <a className={itemClasses} href="#features">
          Features
        </a>
      </li>
      <li>
        <a className={itemClasses} href="about">
          About
        </a>
      </li>
      <li>
        <a className={itemClasses} href="support">
          Support
        </a>
      </li>
    </ul>
  )
}

export { Navigation }