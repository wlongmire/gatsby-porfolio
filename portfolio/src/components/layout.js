import React from 'react';
import Head from './head';
import Header from './header';

const Layout = (props) => {
  return (<div>
    <Head />
    <Header />
    {props.children}
  </div>);
}

export default Layout;