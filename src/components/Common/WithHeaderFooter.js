import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header/index';

const WithHeaderFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WithHeaderFooter;
