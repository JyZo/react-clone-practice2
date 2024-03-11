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
                  <div className="default_link"></div>
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
