import React from 'react';
import ItemPanel from '../ItemPanel';
import Navbar from '../Navbar';

const index = () => {
  return (
    <div className="page_section">
      <Navbar menuIdx={2} />
      <ItemPanel pageTitle="Incompleted Items" filterCompleted={false} />
    </div>
  );
};

export default index;
