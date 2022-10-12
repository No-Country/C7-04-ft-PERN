import Layout from "src/components/layouts/layout"
import Banner from 'src/components/utils/Banner';
import CardContainer from 'src/components/utils/CardContainer';
import { mainAsideNavSections } from 'helpers/aside-nav';
import { aux } from 'helpers/nfts-aux';

export default function Home() {
  console.log("aux: ",aux)
  return (
    <Layout>
      <p>main</p>
      <Banner />
      <CardContainer data={aux}/>
    </Layout>
  )
}
