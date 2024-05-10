import { LogoWithName } from '../../molecules/LogoWithName/LogoWithName'
import { SocialMedia } from '../../molecules/SocialMedia/SocialMedia'
import { Navigation } from '../../molecules/Navigation/Navigation'
import styles from './FooterContent.module.scss'

const FooterContent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__title}>
        <LogoWithName colorVariant="light" />
        <h3 className={styles.footer__subtitle}>
          Discover endless styling possibilities!
        </h3>
      </div>
      <div className={styles.footer__info}>
        <SocialMedia />
        <p className={styles.footer__copyright}>
          Copyright © 2024{' '}
          <a className={styles.footer__link} href="https://github.com/dag-szad">
            dag-szad
          </a>
          . All Rights Reserved
        </p>
      </div>
      <div className={styles.footer__navigation}>
        <Navigation destination="footer" colorVariant="light" />
      </div>
    </div>
  )
}

export { FooterContent }