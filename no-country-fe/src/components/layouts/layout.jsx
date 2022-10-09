import React from "react";
import AsideNav from "../utils/AsideNav";
import Header from "../utils/Header";
import HeaderCategories from "../utils/HeaderCategorys";
import { mainAsideNavSections } from 'helpers/aside-nav';

const Layout = ({ children }) => {
  return (
    <div className='app'>
      <AsideNav sections={mainAsideNavSections} />
      <div>
        <Header />
        <HeaderCategories />
      </div>
      <main className="app--content">
        {children}
      </main>
    </div>
  )
}

export default Layout;
