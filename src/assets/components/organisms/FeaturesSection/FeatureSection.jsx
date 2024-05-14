import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle.jsx'
import { FeaturePreview } from '../../molecules/FeaturePreview/FeaturePreview.jsx'
import styles from './FeatureSection.module.scss'

const FeatureSection = () => {
  return (
    <div className={styles.features}>
      <SectionTitle title="Features" />
      <div className={styles.features__gallery}>
        <FeaturePreview
          img="sth"
          alt="sth"
          title="Earring Customization"
          description={[
            'Change earring colors with just one click to easily match them to your  style.',
            'Stabbed allows you to experiment with different colors, checking  how each one looks on your ear.',
          ]}
        />
        <FeaturePreview
          img="sth"
          alt="sth"
          title="Saving and Sharing Layouts"
          description={[
            'Upload a picture of your ear and save your favorite earring layouts.',
            'Save your designed patterns as an image ensuring easy access to your inspirations.',
          ]}
        />
        <FeaturePreview
          img="sth"
          alt="sth"
          title="Professional Advice and Tips"
          description={[
            'Find information on different piercings, healing times, and the best  jewelry for specific locations.',
            'Our app provides professional advice and  tips so you can make informed decisions about your jewelry.',
          ]}
        />
        <FeaturePreview
          img="sth"
          alt="sth"
          title="Advanced Configuration Options"
          description={[
            'Not just earrings for the ear!',
            'Stabbed offers the ability to put earrings on various parts of the body, such as eyebrows, nose, or lips.',
            'Discover the variety of configuration options and express your personality through diverse accessories.',
          ]}
        />
      </div>
    </div>
  )
}

export { FeatureSection }