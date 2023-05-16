import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
