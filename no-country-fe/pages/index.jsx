import Layout from "src/components/layouts/layout"
import LayoutAuth from "./../src/components/layouts/LayoutAuth";

import Banner from 'src/components/utils/Banner';
import CardContainer from 'src/components/utils/CardContainer';
import { aux } from 'helpers/nfts-aux';
import Collections from "src/components/utils/Collections";
import NextReleases from "src/components/utils/NextReleases";
import Register from "./auth/register/Register";
import Login from "./auth/login/Login";
import { AuthProvider } from "src/context/authContext";

export default function Home() {
  return (
    <Layout>
      <AuthProvider >
        <LayoutAuth>
          {/* <Register /> */}
          <Login />
        </LayoutAuth>  
        {/* <Banner /> */}
        {/* <CardContainer data={aux}/> */}
        {/* <Collections /> */}
        {/* <NextReleases /> */}
      </AuthProvider>
    </Layout>
  )
}