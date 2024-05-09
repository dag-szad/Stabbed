import iconInstagram from './icon-instagram.svg'
import iconYoutube from './icon-youtube.svg'
import iconPinterest from './icon-pinterest.svg'
import iconGithub from './icon-github.svg'
import styles from './SocialMedia.module.scss'

const SocialMedia = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://www.instagram.com/">
          <img
            src={iconInstagram}
            className={styles.icon}
            alt="Instagram icon"
          />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/">
          <img src={iconYoutube}
          className={styles.icon}
          alt="Youtube icon" />
        </a>
      </li>
      <li>
        <a href="https://pinterest.com/">
          <img
            src={iconPinterest}
            className={styles.icon}
            alt="Pinterest icon"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/dag-szad/Stabbed">
          <img src={iconGithub}
          className={styles.icon}
          alt="Github icon" />
        </a>
      </li>
    </ul>
  )
}

export { SocialMedia }