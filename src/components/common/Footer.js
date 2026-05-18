import React from "react";
import { Link } from "react-router-dom";
import "../../style/common.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_upper">
          <div className="logo footer_upper_inner">
            <p className="footer_logo">
              <Link to="/">CASEMAN</Link>
            </p>
            <p className="brand_text">
              2010년부터 시작된 프리미엄 패키징 전문 브랜드
              <br />
              고객의 브랜드 가치를 높이는 패키징 솔루션을 제공합니다
            </p>
          </div>
          <div className="footer_upper_inner">
            <p className="footer_title">회사정보</p>
            <ul>
              <li>상호: 케이스맨</li>
              <li>대표: 홍길동</li>
              <li>사업자등록번호: 123-45-67890</li>
              <li>통신판매업신고: 제2010-서울-00000호</li>
            </ul>
          </div>
          <div className="footer_upper_inner">
            <p className="footer_title">고객센터</p>
            <ul>
              <li>전화: 02-1234-5678</li>
              <li>팩스: 02-1234-5679</li>
              <li>이메일: info@casemanshop.kr</li>
              <li>운영시간: 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="footer_downer">
          <p>© 2024 CASEMAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
