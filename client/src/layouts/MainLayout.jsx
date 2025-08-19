import { Outlet } from 'react-router-dom';
import { Header } from '../components/index.js';
import { ToastContainer } from 'react-toastify';

import React from 'react';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
