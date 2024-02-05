import React from 'react';
import { Link } from 'react-router-dom';
import './subcategorybar.scss';

const subcategorybar = () => {
  return (
    <div className="subcategory_wrapper">
      <div className="subcategory_div">
        <div className="subcategory_grid_wrapper">
          <div className="subcategory_grid">
            <ul className="subcategory_ul">
              <li className="sub_big_menu">
                <Link to="./">여성신발</Link>
              </li>
              <li>
                <Link to="./">구두/로퍼</Link>
              </li>
              <li>
                <Link to="./">운동화/스니커즈</Link>
              </li>
              <li>
                <Link to="./">샌들/슬리퍼</Link>
              </li>
              <li className="sub_menu_fin">
                <Link to="./">워커/부츠</Link>
              </li>
              <li className="sub_big_menu">
                <Link to="./">남성신발</Link>
              </li>
              <li>
                <Link to="./">구두/로퍼</Link>
              </li>
              <li>
                <Link to="./">운동화/스니커즈</Link>
              </li>
              <li>
                <Link to="./">샌들/슬리퍼</Link>
              </li>
              <li className="sub_menu_fin">
                <Link to="./">워커/부츠</Link>
              </li>
              <li className="sub_big_menu">
                <Link to="./">가방/핸드백</Link>
              </li>
              <li>
                <Link to="./">숄더백</Link>
              </li>
              <li>
                <Link to="./">크로스백</Link>
              </li>
              <li>
                <Link to="./">토트백</Link>
              </li>
              <li>
                <Link to="./">백팩</Link>
              </li>
              <li>
                <Link to="./">힙색/메신저백</Link>
              </li>
            </ul>
            <ul className="subcategory_ul">
              <li className="sub_big_menu">
                <Link to="./">지갑/벨트</Link>
              </li>
              <li>
                <Link to="./">여성용지갑</Link>
              </li>
              <li>
                <Link to="./">남성용지갑</Link>
              </li>
              <li>
                <Link to="./">머니클립/명함/키지갑</Link>
              </li>
              <li className="sub_menu_fin">
                <Link to="./">벨트/멜빵</Link>
              </li>
              <li className="sub_big_menu">
                <Link to="./">여성의류</Link>
              </li>
              <li>
                <Link to="./">자켓/코트</Link>
              </li>
              <li>
                <Link to="./">패딩/야상/점퍼</Link>
              </li>
              <li>
                <Link to="./">티셔츠/민소매/탑</Link>
              </li>
              <li>
                <Link to="./">니트/스웨터/가디건</Link>
              </li>
              <li>
                <Link to="./">블라우스/남방</Link>
              </li>
              <li>
                <Link to="./">바지/데님</Link>
              </li>
              <li className="sub_menu_fin">
                <Link to="./">스커트</Link>
              </li>
              <li className="sub_big_menu">
                <Link to="./">남성의류</Link>
              </li>
              <li>
                <Link to="./">자켓/코트</Link>
              </li>
              <li>
                <Link to="./">패딩/야상/점퍼</Link>
              </li>
              <li>
                <Link to="./">티셔츠/민소매/탑</Link>
              </li>
              <li>
                <Link to="./">니트/스웨터/가디건</Link>
              </li>
              <li>
                <Link to="./">블라우스/남방</Link>
              </li>
              <li>
                <Link to="./">바지/데님</Link>
              </li>
              <li>
                <Link to="./">정장</Link>
              </li>
            </ul>
            <ul className="subcategory_ul">
              <li className="sub_big_menu">
                <Link to="./">패션잡화</Link>
              </li>
              <li>
                <Link to="./">모자</Link>
              </li>
              <li>
                <Link to="./">넥타이</Link>
              </li>
              <li>
                <Link to="./">장갑/손수건</Link>
              </li>
              <li>
                <Link to="./">머플러/스카프</Link>
              </li>
              <li className="sub_menu_fin">
                <Link to="./">선글라스/안경</Link>
              </li>
              <li className="sub_big_menu">
                <Link to="./">시계/쥬얼리</Link>
              </li>
              <li>
                <Link to="./">여성용시계</Link>
              </li>
              <li>
                <Link to="./">남성용시계</Link>
              </li>
              <li>
                <Link to="./">반지/목걸이/귀걸이</Link>
              </li>
              <li className="sub_menu_fin">
                <Link to="./">팔찌/발찌</Link>
              </li>
              <li className="sub_big_menu">
                <Link to="./">유아동</Link>
              </li>
              <li>
                <Link to="./">영유아</Link>
              </li>
              <li>
                <Link to="./">여아동복</Link>
              </li>
              <li className="sub_menu_fin">
                <Link to="./">남아동복</Link>
              </li>
              <li className="sub_big_menu">
                <Link to="./">기타 수입명품</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default subcategorybar;
