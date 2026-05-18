import React from "react";
import { Link } from "react-router-dom";
import "../../style/common.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container header_container">
        <div className="logo">
          <Link to="/">CASEMAN</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">CASEMAN</Link>
            </li>
            <li>
              <Link to="/">종이박스</Link>
            </li>
            <li>
              <Link to="/">부직포</Link>
            </li>
            <li>
              <Link to="/">쇼핑백/캐리어</Link>
            </li>
            <li>
              <Link to="/">디자인박스</Link>
            </li>
            <li>
              <Link to="/">선물포장</Link>
            </li>
            <li>
              <Link to="/">케이크박스</Link>
            </li>
          </ul>
        </nav>
        <div className="login">
          <Link to="/">로그인</Link>
          <Link to="/">장바구니</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
