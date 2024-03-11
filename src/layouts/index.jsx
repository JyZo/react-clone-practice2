import React from 'react';
import Header from './header';
import Main from './main';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import Footer from './footer';
import Banner from './banner';
import './index.scss';

const BaseLayout = (children) => {
  console.log('child');
  console.log(children);
  return (
    <div className="total_wrap">
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseLayout;
