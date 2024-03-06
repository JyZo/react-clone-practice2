import React from 'react';
import './productgrid.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Productgrid = ({ imgSrc, name, price, location, timer, paymentSrc }) => {
  const [products, setProducts] = useState([]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/productData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data); // 입력된 feed 값이 저장된 data
      });
  }, []);

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
              <div className="productgrid_price">{price}</div>

              <div class="productgrid_lo_ti">
                <span class="">{location}</span>
                <span class="">|</span>
                <span class="">{timer}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative_wrapper">
          <Link to="./">
            <div className="productgrid_img">
              <img alt={name} src={imgSrc}></img>
            </div>
            <div className="productgrid_info">
              <h2>{name}</h2>
              <div className="productgrid_price">{price}</div>

              <div class="productgrid_lo_ti">
                <span class="">{location}</span>
                <span class="">|</span>
                <span class="">{timer}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative_wrapper">
          <Link to="./">
            <div className="productgrid_img">
              <img alt={name} src={imgSrc}></img>
            </div>
            <div className="productgrid_info">
              <h2>{name}</h2>
              <div className="productgrid_price">{price}</div>

              <div class="productgrid_lo_ti">
                <span class="">{location}</span>
                <span class="">|</span>
                <span class="">{timer}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative_wrapper">
          <Link to="./">
            <div className="productgrid_img">
              <img alt={name} src={imgSrc}></img>
            </div>
            <div className="productgrid_info">
              <h2>{name}</h2>
              <div className="productgrid_price">{price}</div>

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

export default Productgrid;
