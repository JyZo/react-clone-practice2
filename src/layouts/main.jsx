import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import { useState, useEffect } from 'react';
import Product from '../components/product/product';
import Swiperleftbutton from '../components/svg/swiperprevbutton';
import Swiperrightbutton from '../components/svg/swipernextbutton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Main = () => {
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
    <main className="main_root">
      <div className="top_main">
        <div className="carousel_wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            // slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            navigation={{
              nextEl: '.button_next',
              prevEl: '.button_prev',
            }}
            loop={true}
            pagination={pagination}
            style={{
              'padding-bottom': '2rem',
            }}
          >
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="2월 짱구 특가 판매"
                  src="https://img2.joongna.com/media/original/2024/02/13/1707802048055.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
                <div class="img_ad">
                  <h2 class="text-[32px] leading-[40px] font-bold">
                    매일 출첵하고
                  </h2>
                  <h2 class="text-[32px] leading-[40px] font-bold">
                    에코마일 받으세요
                  </h2>
                  <h3 class="text-[18px] leading-[24px] mt-4">
                    1일 최대 1만원 당첨!
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="240212_mcs_glo_THR_(1번_고정_4000)"
                  src="https://img2.joongna.com/media/original/2024/01/26/1706225395917.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="231225_마인드노크_SK브로드밴드 (2번 / 1400만)"
                  src="https://img2.joongna.com/media/original/2024/01/29/1706510324128.jpg"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="240201_메이블_롯데카드(4번_2000)"
                  src="https://img2.joongna.com/media/original/2024/01/31/1706656047365.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="중고나라X폰가비 이벤트"
                  src="https://img2.joongna.com/media/original/2024/01/29/1706492595714.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="사기예방법"
                  src="https://img2.joongna.com/media/original/2023/06/09/1686274938360.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="1월 CU알뜰택배 이벤트"
                  src="https://img2.joongna.com/media/original/2023/12/28/1703727779375.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="2월 하나카드 즉시할인"
                  src="https://img2.joongna.com/media/original/2024/02/08/1707368809314.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="2월 럭키드로우"
                  src="https://img2.joongna.com/media/original/2024/01/31/1706691118624.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="./">
                <img
                  alt="2월 첫결제 수수료 할인"
                  src="https://img2.joongna.com/media/original/2024/01/31/1706690579102.png"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="swipper_button_wrapper">
            {/* <button className="button_prev"> */}

            <Swiperleftbutton />
            {/* </button> */}
            {/* <button className="button_next"> */}
            <Swiperrightbutton />
            {/* </button> */}
          </div>
        </div>
      </div>

      <div className="bot_main">
        <div>
          <div className="product_carousel">
            <div className="product_wrapper">
              <div className="product_text">
                <h3 className="product_intro">당신을 위한 추천상품!</h3>
              </div>
              <div className="product_slide">
                <Swiper
                  // modules={[Navigation, Pagination]}
                  slidesPerView={'5'}
                  centerInsufficientSlides={'true'}
                  spaceBetween={30}
                  navigation={{
                    nextEl: '.button_next',
                    prevEl: '.button_prev',
                  }}
                  // loop={true}
                  pagination={pagination}
                  style={{
                    'padding-bottom': '2rem',
                  }}
                >
                  {products.map((product) => (
                    <SwiperSlide>
                      <Link to="./">
                        <Product
                          key={product.id}
                          imgSrc={product.imgSrc}
                          name={product.name}
                          price={product.price}
                          location={product.location}
                          timer={product.timer}
                          paymentSrc={product.paymentSrc}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                  <SwiperSlide>
                    <div class="no_loop_button_wrapper">
                      <Link to="./">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                      </Link>
                      <div class="add_plus">더보기</div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="product_grid_page">
          <div className="gird_add">
            <img
              alt="pickup image"
              src="https://web.joongna.com/assets/images/banner/pickup-banner_pc_1x.webp"
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
