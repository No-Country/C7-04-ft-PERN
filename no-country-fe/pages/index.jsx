import AsideNav from 'src/components/utils/AsideNav'
import Footer from 'src/components/utils/Footer'

import { mainAsideNavSections } from 'helpers/aside-nav';

export default function Home() {
  return (
    <div>
      <AsideNav sections={mainAsideNavSections} />
      <Footer/>
    </div>
  )
}
