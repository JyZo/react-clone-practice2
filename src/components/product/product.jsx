import React from 'react';
import './product.scss';
import NaverPay from '../svg/naverpay';

const product = ({ imgSrc, name, price, location, timer, paymentSrc }) => {
  console.log(paymentSrc);

  return (
    <>
      <div>
        <img
          alt="아이폰"
          src={imgSrc}
          // decoding="async"
          // data-nimg="fill"
        ></img>
      </div>
      <div class="">
        <h2 class="">{name}</h2>
        <div class="">{price}</div>
        <div class="">
          <span class="">{location}</span>
          <span class="">|</span>
          <span class="">{timer}</span>
        </div>
        <div class="">{paymentSrc === 'true' ? <NaverPay /> : 'false'}</div>
      </div>
    </>
  );
};

export default product;
