import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import NavMenu from './NavMenu';

const Layout = ({children}) => {

  return(
    <>
      <Helmet>
        <title>Casa Mucha</title>
      </Helmet>
      <Header/>
      {children}
    </>
  )
}

export default Layout;