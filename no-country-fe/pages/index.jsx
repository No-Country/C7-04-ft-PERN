import Layout from "src/components/layouts/layout"
import Banner from 'src/components/utils/Banner';
import CardContainer from 'src/components/utils/CardContainer';
import { aux } from 'helpers/nfts-aux';

export default function Home() {
  console.log("aux: ",aux)
  return (
    <Layout>
      <Banner />
      <CardContainer data={aux}/>
    </Layout>
  )
}