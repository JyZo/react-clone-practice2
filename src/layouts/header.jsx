import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header className="header_root">
      <div className="header_items_wrapper">
        <div className="top_header">
          top_header
          <Link to="./">
            <img
              className="header_logo"
              src="https://web.joongna.com/assets/images/custom-logo.svg"
              alt="헤더로고"
            ></img>
          </Link>
          <div className="searchbar">sssssss</div>
          <div className="top_sub_menu">mmmmm</div>
        </div>
        <div className="bot_header">bot_header</div>
      </div>
    </header>
  );
};

export default header;
