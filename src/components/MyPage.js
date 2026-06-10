import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/mypage.scss";

import { MypageData } from "../DummyData/MypageData";

const MyPage = () => {
  /*mypage data 불러오기*/
  const [mypageData, setMypageData] = useState(MypageData);

  /*주문한 상품 data*/
  const orderdata = mypageData.MypageOrder;

  /*mobile 구분*/
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  let goodsCount = 10;
  if (isMobile) {
    goodsCount = 6;
  }

  /*약관 동의*/
  const accordions = [
    { id: 1, content: "개인정보 수집 및 이용 동의 (필수)" },
    { id: 2, content: "개인정보 제3자 제공 동의 (필수)" },
  ];

  const [id, setId] = useState(0);
  const [active, setActive] = useState(false);

  const accorClick = (i) => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
    setId(i);
  };

  return (
    <div className="mypage" style={{ paddingTop: isMobile ? "100px" : "" }}>
      <Header />
      <div className="mypage_container container">
        <div className="mypage_title">
          <h1>Mypage</h1>
        </div>
        <div className="mypage_order_list_box">
          <h2 className="mypage_section_title">주문한 상품</h2>
          <ul className="mypage_order_list">
            {orderdata.slice(0, goodsCount).map((order, index) => (
              <li key={order.id}>
                <Link to={order.link}>
                  <div className="goods_image">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/goods/${order.imageUrl}`}
                      alt="상품"
                    />
                  </div>
                  <div className="goods_content">
                    <h2>{order.goodsName}</h2>
                    <p>{order.price.toLocaleString()}원</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mypage_new_order">
          <div className="new_inquiry_container">
            <form action="">
              <div className="mypage_title">
                <h1>Inquiry</h1>
              </div>
              <div className="cell">
                <div className="input_div">
                  <label htmlFor="name">이름</label>
                  <div className="input_div_inner">
                    <input
                      type="text"
                      placeholder="이름을 입력하세요"
                      className="full_input"
                      id="name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="input_div">
                  <label htmlFor="cellphone">연락처</label>
                  <div className="input_div_inner">
                    <input
                      type="text"
                      placeholder="연락처를 입력하세요"
                      className="full_input"
                      id="cellphone"
                      name="cellphone"
                    />
                  </div>
                </div>
                <div className="input_div">
                  <label htmlFor="cellphone">문의 내용</label>
                  <div className="input_div_inner">
                    <textarea className="textarea full_input"></textarea>
                  </div>
                </div>
              </div>
              <div className="cell order_agreement">
                <h2>약관동의</h2>
                <div className="order_agreement_check">
                  <input type="checkbox" id="agreement" />
                  <label htmlFor="agreement">전체 동의</label>
                </div>
                <div className="agreement_accordion">
                  {accordions.map((acc, index) => (
                    <div
                      className={`accordion ${id === acc.id && active === true ? "active" : ""}`}
                      key={acc.id}
                      onClick={() => accorClick(acc.id)}
                    >
                      <p className="accordion_title">{acc.content}</p>
                      <div className="accordion_content">{acc.id}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order_button">
                <button type="submit">상담신청하기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
