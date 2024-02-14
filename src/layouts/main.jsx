import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const main = () => {
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
            slidesPerView={3}
            spaceBetween={30}
            navigation
            loop={true}
            pagination={pagination}
            style={{
              '--swiper-navigation-size': '20px',
              '--swiper-pagination-color': '#000',
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
        </div>
      </div>
      <div className="bot_main">MAIN2</div>
    </main>
  );
};

export default main;
