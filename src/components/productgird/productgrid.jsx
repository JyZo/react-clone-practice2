import React from 'react';
import './productgrid.scss';
import { Link } from 'react-router-dom';

const productgrid = ({ imgSrc, name, price, location, timer, paymentSrc }) => {
  return (
    <div className="productgrid_wrapper">
      <div className="productgird_gird_wrapper">
        <div className="relative_wrapper">
          <Link to="./">
            <div className="productgrid_img">
              <img alt={name} src={imgSrc}></img>
            </div>
            <div className="productgrid_info">
              <h2>{name}</h2>
              <div>{price}</div>

              <div class="productgrid_lo_ti">
                <span class="">{location}</span>
                <span class="">|</span>
                <span class="">{timer}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default productgrid;
