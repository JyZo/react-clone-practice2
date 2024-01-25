import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer className="footer_root">
      <div className="footer_wrap_item">
        <div className="top_footer">
          <div className="top_grid">
            <div className="intro_grid">
              <div className="intro_flex_grid">
                <Link to="./">
                  <img
                    className="footer_logo"
                    src="https://web.joongna.com/assets/images/custom-logo.svg"
                    alt="헤더로고"
                  ></img>
                </Link>

                <p className="">
                  (주)중고나라
                  <br />
                  대표자 : 홍준
                  <br />
                  사업자 등록번호 : 215-87-87482
                  <br />
                  통신판매신고번호 : 제2019-서울서초-0097호
                  <br />
                  호스팅제공자 : 아마존웹서비스
                  <br />
                </p>
              </div>
            </div>
            <div className="info_grid">
              <h4>Social</h4>
              <ul>
                <li>
                  <span className="">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                      ></path>
                    </svg>
                  </span>
                  페이스북
                </li>
                <li>
                  <span className="">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                      ></path>
                    </svg>
                  </span>
                  유튜브
                </li>
                <li>
                  <span className="">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                      ></path>
                    </svg>
                  </span>
                  카페
                </li>
              </ul>
            </div>
            <div className="info_grid">
              <h4>Information</h4>
              <ul>
                <li>개인정보처리방침</li>
                <li>개인정보처리방침</li>
                <li>개인정보처리방침</li>
                <li>개인정보처리방침</li>
                <li>개인정보처리방침</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
            <div className="info_grid">
              <h4>Contact</h4>
              <ul>
                <li>메일: joongna@joonggonara.co.kr</li>
                <li>전화: 070-5066-2278</li>
                <li>전화: 070-5066-2278</li>
                <li>메일: joongna@joonggonara.co.kr</li>
                <li>메일: joongna@joonggonara.co.kr</li>
              </ul>
            </div>
          </div>
          <div className="bot_grid">
            <p>
              “중고나라” 상점의 판매상품을 제외한 모든 상품들에 대하여,
              (주)중고나라는 통신판매중개자로서 거래 당사자가 아니며 판매 회원과
              구매 회원 간의 상품거래 정보 및 거래에 관여하지 않고, 어떠한
              의무와 책임도 부담하지 않습니다.
            </p>
            <div className="catebutton">
              <button>
                카테고리 리스트
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </button>
              <ul className="category_list_wrapper">
                <li className="category_list">카테1</li>
                <li className="category_list">카테2</li>
                <li className="category_list">카테3</li>
                <li className="category_list">카테4</li>
                <li className="category_list">카테1</li>
                <li className="category_list">카테2긴거</li>
                <li className="category_list">카테3</li>
                <li className="category_list">카테4</li>
                <li className="category_list">카테1</li>
                <li className="category_list">카테2</li>
                <li className="category_list">카테3</li>
                <li className="category_list">카테4긴거</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bot_footer">
          <div className="bot_wrap">
            <p>
              Copyright © 2024 &nbsp;
              <a href="http://localhost:3000/">
                <b>(주)중고나라</b>
              </a>
              &nbsp; All Rights Reserved
            </p>
            <p>
              <a href="#">Scroll to top</a>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
