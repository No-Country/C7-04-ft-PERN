import AsideNav from 'src/components/utils/AsideNav';
import Header from 'src/components/utils/Header';
import HeaderCategorys from 'src/components/utils/HeaderCategorys';
import Banner from 'src/components/utils/Banner';
import CardContainer from 'src/components/utils/CardContainer';

import { mainAsideNavSections } from 'helpers/aside-nav';
import { aux } from 'helpers/nfts-aux';
console.log("aux: ",aux)
export default function Home() {
  return (
    <div className='main'>
      <AsideNav sections={mainAsideNavSections} />
      <div className='home'>
        <Header />
        <HeaderCategorys />
        <Banner />
        <CardContainer data={aux}/>
      </div>
    </div>
  )
}
