import styles from './FooterAddon.module.scss'

const FooterAddon = () => {
  const randomText = [
    'Have a nice day!',
    'Go, get pierced!',
    `You're awesome!`,
    'Thanks for checking out Stabbed!',
    'Tighten up your jewelry!',
    `Don't touch your piercings!`,
  ]

  const text = randomText[Math.floor(Math.random() * randomText.length)]

  return <p className={styles.addon}>Still work in progress 😊 {text}</p>
}

export { FooterAddon }
