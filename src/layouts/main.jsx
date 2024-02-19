import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Main = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

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
            <button className="button_prev">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
              </svg>
            </button>
            <button className="button_next">
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
            </button>
          </div>
        </div>
      </div>

      <div className="bot_main">MAIN2</div>
    </main>
  );
};

export default Main;
