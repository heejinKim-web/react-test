import React, { useState, useEffect, useRef } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/order.scss";

const Inquiry = () => {
  const pageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  /*mobile 구분*/
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    /*페이지 위로 당기기*/
    const timer = setTimeout(() => {
      if (pageRef.current) {
        pageRef.current.scrollTo(0, 0);
      }

      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

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
    <div
      className="inquiry order"
      style={{ paddingTop: isMobile ? "100px" : "" }}
      ref={pageRef}
    >
      <Header />
      <div className="order_container">
        <form action="">
          <div className="order_title">
            <h1>Inquiry</h1>
          </div>
          <div className="cell inquiry">
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
              <label htmlFor="contents">문의 내용</label>
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
      <Footer />
    </div>
  );
};

export default Inquiry;
