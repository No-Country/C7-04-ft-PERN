import AsideNav from 'src/components/utils/AsideNav'
import Footer from 'src/components/utils/Footer'


import { mainAsideNavSections } from 'helpers/aside-nav';
import Header from 'src/components/utils/Header';
import HeaderCategorys from 'src/components/utils/HeaderCategorys';
import Footer from 'src/components/utils/Footer'

export default function Home() {
  return (
    <div className='main'>
    <AsideNav sections={mainAsideNavSections} />
    <div>
      <Header />
      <HeaderCategorys />
      <Footer/>
    </div>
  </div>
  )
}
