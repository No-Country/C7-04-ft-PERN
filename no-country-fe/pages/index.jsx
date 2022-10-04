import AsideNav from 'src/components/utils/AsideNav'
import Footer from 'src/components/utils/Footer'
import styles from '../styles/Home.module.css'
import { mainAsideNavSections } from 'helpers/aside-nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <AsideNav sections={mainAsideNavSections} />
      <Footer/>
    </div>
  )
}
