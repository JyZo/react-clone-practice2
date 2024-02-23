import React from 'react';
import './product.scss';
import NaverPay from '../svg/naverpay';
import Seveneleven from '../svg/seveneleven';

const product = ({ imgSrc, name, price, location, timer, paymentSrc }) => {
  return (
    <>
      <div className="product_img">
        <img alt="아이폰" src={imgSrc}></img>
      </div>
      <div class="product_info">
        <h2 class="product_name">{name}</h2>
        <div class="product_price">{price}</div>
        <div class="product_lo_ti">
          <span class="">{location}</span>
          <span class="">|</span>
          <span class="">{timer}</span>
        </div>
        <div class="">{paymentSrc === 'true' ? <NaverPay /> : '\u00A0'}</div>
      </div>
    </>
  );
};

export default product;
