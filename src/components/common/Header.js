import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/common.scss";

const Header = () => {
  /*mobile 구분*/
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`header ${isMobile ? "mobile" : ""}`}>
      <div className="container header_container">
        <div className="logo">
          <Link to="/">CASEMAN</Link>
        </div>
        <nav>
          <Link to="/inquiry" className="inquiry_button">
            상담 문의하기
          </Link>
        </nav>
        <div className="login">
          <Link to="/">로그인</Link>
          <Link to="/">장바구니</Link>
          <Link to="/mypage">마이페이지</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
