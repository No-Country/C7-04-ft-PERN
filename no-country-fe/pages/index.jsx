import AsideNav from 'src/components/utils/AsideNav';
import Header from 'src/components/utils/Header';
import HeaderCategorys from 'src/components/utils/HeaderCategorys';

import { mainAsideNavSections } from 'helpers/aside-nav';

export default function Home() {
  return (
    <div className='main'>
      <AsideNav sections={mainAsideNavSections} />
      <div>
        <Header />
        <HeaderCategorys />
      </div>
    </div>
  )
}
