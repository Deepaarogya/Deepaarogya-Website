import React from 'react';
import { Outlet } from 'react-router';
import Footer from './footer';
import Nav from './nav';

export default () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer/>
    </>
  );
};