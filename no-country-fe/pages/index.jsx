import AsideNav from 'src/components/utils/AsideNav'
import styles from '../styles/Home.module.css'
import { mainAsideNavSections } from 'helpers/aside-nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <AsideNav sections={mainAsideNavSections} />
    </div>
  )
}
