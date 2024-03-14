import React from 'react';
import './loginview.scss';
import { Link } from 'react-router-dom';

const loginview = () => {
  return (
    <main className="loginview_main">
      <div className="loginview_wrapper">
        <div className="loginview_item_wrapper">
          <Link to="/">
            <span>
              <img
                src="https://web.joongna.com/assets/images/custom-logo.svg"
                alt="헤더로고"
              ></img>
            </span>
          </Link>
          <div className="loginview_info_wrapper">
            <div>
              <div type="default">
                <div className="default_item_wrapper">
                  <div className="default_text">
                    <h2>
                      <span>중고나라에 오신 것을</span>
                      <span> 환영합니다.</span>
                    </h2>
                  </div>
                  <div className="default_link">
                    <div className="login_ing">
                      <label for="auto-login" className="checkbox_label">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0DCC5A"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#0DCC5A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M16 9L10.5 14.5L8 12"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <span>로그인 유지하기</span>
                      </label>
                      <input
                        id="auto-login"
                        type="checkbox"
                        className="checkbox_input"
                      ></input>
                    </div>
                    <button className="naver_button">
                      <div className="naver_svg_wrapper">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          role="img"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.6 0S0 0 0 1.6v20.8S0 24 1.6 24h20.8s1.6 0 1.6-1.6V1.6S24 0 22.4 0zm3.415 5.6h4.78l4.425 6.458V5.6h4.765v12.8h-4.78L9.78 11.943V18.4H5.015Z"></path>
                        </svg>
                      </div>
                      <span>네이버로 시작하기</span>
                    </button>
                    <button className="kakao_button">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class="text-sm sm:text-base me-1.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"></path>
                        </g>
                      </svg>
                      <span>카카오로 시작하기</span>
                    </button>
                    <button className="phone_button">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        class="text-sm sm:text-base me-1.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>휴대폰번호로 시작하기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tip_text">
            <span>공용 PC에서는 [로그인 유지하기]를 꺼주세요</span>
          </div>
        </div>
      </div>
      <ins class="ins_gap"></ins>
    </main>
  );
};

export default loginview;
