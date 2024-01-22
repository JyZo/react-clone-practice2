import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Banner from './banner';
import './index.scss';

const BaseLayout = () => {
  return (
    <div className="total_wrap">
      <Banner />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default BaseLayout;
