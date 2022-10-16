import Layout from "src/components/layouts/layout"
import Banner from 'src/components/utils/Banner';
import CardContainer from 'src/components/utils/CardContainer';
import { aux } from 'helpers/nfts-aux';
import Collections from "src/components/utils/Collections";
import NextReleases from "src/components/utils/NextReleases";
import Register from "./auth/register/Register";

export default function Home() {
  return (
    <Layout>
      <Register />
      {/* <Banner />
      <CardContainer data={aux}/> */}
      {/* <Collections /> */}
      {/* <NextReleases /> */}
    </Layout>
  )
}