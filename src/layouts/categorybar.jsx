import React, { useState } from 'react';
import './categorybar.scss';
import { Link } from 'react-router-dom';
import Subcategorybar from './subcategorybar';

const Categorybar = () => {
  return (
    <div className="categorybar_wrapper">
      <ul className="category_base_ul">
        <li>
          <Link to="./" className="category_big_menu">
            수입명품
          </Link>
          <Subcategorybar />
        </li>
        <li>
          <Link to="./" className="category_big_menu">
            패션의류
          </Link>
        </li>
        <li>
          <Link to="./" className="category_big_menu">
            패션잡화
          </Link>
        </li>
        <li>
          <Link to="./" className="category_big_menu">
            뷰티
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categorybar;
