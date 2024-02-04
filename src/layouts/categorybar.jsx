import React, { useState } from 'react';
import './categorybar.scss';
import { Link } from 'react-router-dom';

const Categorybar = () => {
  return (
    <div className="categorybar_wrapper">
      <ul className="category_base_ul">
        <li>
          <Link to="./">수입명품</Link>
        </li>
        <li>
          <Link to="./">패션의류</Link>
        </li>
        <li>
          <Link to="./">패션잡화</Link>
        </li>
        <li>
          <Link to="./">뷰티</Link>
        </li>
      </ul>
    </div>
  );
};

export default Categorybar;
