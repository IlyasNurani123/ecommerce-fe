import React from 'react';
import Navbar from './navbar/Navbar';

const NoSidebarLayout = (props) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default NoSidebarLayout;
