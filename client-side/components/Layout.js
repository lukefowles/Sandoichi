import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import React from 'react';

const Layout = ({children}) => {
  return ( 
    <>
        <Navbar/>
        <Sidebar/>
        {children}
        {/* <Footer/> */}
    </>
  )
};

export default Layout;
