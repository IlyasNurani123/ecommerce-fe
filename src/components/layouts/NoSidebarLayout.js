import React from 'react';
import Navbar from './navbar/Navbar';

const NoSidebarLayout = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  );
};

export default NoSidebarLayout;
