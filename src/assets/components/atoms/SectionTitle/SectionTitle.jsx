import styles from './SectionTitle.module.scss'

const SectionTitle = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>
}

export { SectionTitle }