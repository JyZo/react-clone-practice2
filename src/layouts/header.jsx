import React, { useState, useRef } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import Categorybar from './categorybar';

const Header = () => {
  // const [rankIndex, setRankIndex] = useState(3);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const ThiredRef = useRef(null);

  const nextRank = (e) => {
    e.preventDefault();
    console.log('next');
    // console.log(rankIndex);
  };

  const prevRank = (e) => {
    e.preventDefault();
    console.log('prev');
    // console.log(rankIndex);
  };

  return (
    <header className="header_root">
      <div className="header_items_wrapper">
        <div className="top_header">
          <div className="header_logo">
            <Link to="./">
              <img
                src="https://web.joongna.com/assets/images/custom-logo.svg"
                alt="헤더로고"
              ></img>
            </Link>
          </div>

          <div className="search_wrapper">
            <div className="search_bar">
              <form>
                <label className="search_label">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[16px] h-[16px] text-heading"
                    >
                      <path
                        d="M10.0278 19.0556C14.3233 19.0556 17.8056 15.5733 17.8056 11.2778C17.8056 6.98223 14.3233 3.5 10.0278 3.5C5.73223 3.5 2.25 6.98223 2.25 11.2778C2.25 15.5733 5.73223 19.0556 10.0278 19.0556Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="transparent"
                      ></path>
                      <path
                        d="M21 21.8999L15.5 16.8999"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    id="search-header"
                    placeholder="어떤 상품을 찾으시나요? 카페상품, 앱상품 모두 검색"
                    aria-label="search-header"
                    autoComplete="off"
                  ></input>
                </label>
              </form>
            </div>
            <div className="rank_bar">
              <button onClick={prevRank}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button onClick={nextRank}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <ul ref={firstRef}>
                <li>
                  <Link to="./">
                    <span>1. </span>
                    일등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>2. </span>
                    이등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>3. </span>
                    삼등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>4. </span>
                    사아등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>5. </span>
                    오등
                  </Link>
                </li>
              </ul>
              <ul ref={secondRef}>
                <li>
                  <Link to="./">
                    <span>6. </span>
                    유욱등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>7. </span>
                    칠등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>8. </span>
                    파알등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>9. </span>
                    구구구등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>10. </span>
                    십등
                  </Link>
                </li>
              </ul>
              <ul ref={ThiredRef}>
                <li>
                  <Link to="./">
                    <span>11. </span>
                    십일등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>12. </span>
                    십이등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>13. </span>
                    십삼등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>14. </span>
                    십사등
                  </Link>
                </li>
                <li>
                  <Link to="./">
                    <span>15. </span>
                    십오오오등
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="top_sub_menu">
            <ul>
              <li>
                <button>
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path>
                    </svg>
                  </div>
                  <p>채팅하기</p>
                </button>
              </li>
              <li>
                <Link to="./login">
                  <div>
                    <svg
                      fill="none"
                      height="29"
                      viewBox="0 0 24 24"
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m10 19h-3.8c-1.1201 0-1.68016 0-2.10798-.218-.37633-.1917-.68229-.4977-.87403-.874-.21799-.4278-.21799-.9879-.21799-2.108v-7.6c0-1.12011 0-1.68016.21799-2.10798.19174-.37633.4977-.68229.87403-.87403.42782-.21799.98788-.21799 2.10798-.21799h11.6c1.1201 0 1.6802 0 2.108.21799.3763.19174.6823.4977.874.87403.218.42782.218.98788.218 2.10798v.3m-12 1v-1m0 1h2.0001m-2.0001 0c-1.11721-.00002-1.99756.12616-1.9999 1.3325-.00176.9003-.00001 1.1675 1.99999 1.1675 2.00001 0 2.00001.2055 2.00001 1.1667 0 .7223-.0001 1.3333-2.0001 1.3333m0 1v-1m0 0h-1.9999m6.9999-4.5h3m-3 10 2.025-.405c.1765-.0353.2648-.053.3471-.0853.0731-.0286.1426-.0658.2069-.1107.0726-.0506.1362-.1142.2636-.2416l4.1574-4.1574c.5523-.5523.5523-1.4477 0-2s-1.4477-.5523-2 0l-4.1574 4.1574c-.1274.1274-.191.191-.2416.2636-.0449.0643-.0821.1338-.1107.2069-.0323.0823-.05.1706-.0853.3471z"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <p>판매하기</p>
                </Link>
              </li>
              <li>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <p>마이</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bot_header">
          <div className="category_wrapper">
            <div className="category_nav">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              카테고리
            </div>
            <Categorybar />
          </div>

          <nav className="nav_bar">
            <div className="nav_item">
              <Link to="./">이벤트</Link>
            </div>
            <div className="nav_item">
              <Link to="./">사기조회</Link>
            </div>
            <div className="nav_item">
              <Link to="./">시세조회</Link>
            </div>
            <div className="nav_item">
              <Link to="./">출석체크</Link>
            </div>
            <div className="nav_item">
              <Link to="./">찜한 상품</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
