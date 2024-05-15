import { LogoWithName } from '../../molecules/LogoWithName/LogoWithName.jsx'
import { Navigation } from '../../molecules/Navigation/Navigation.jsx'
import styles from './HeaderContent.module.scss'

const HeaderContent = () => {
  return (
    <div className={styles.header}>
      <LogoWithName colorVariant="dark" />
      <Navigation destination="header" colorVariant="dark" />
    </div>
  )
}

export { HeaderContent }
