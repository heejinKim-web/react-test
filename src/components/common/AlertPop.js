import React from "react";
import { Link } from "react-router-dom";
import "../../style/alert.scss";

const AlertPop = ({ alert, setAlert, popOpen }) => {
  /*팝업 닫기*/
  const popClose = (e) => {
    e.preventDefault();
    setAlert(false);
  };

  return (
    <div className={`mypage_alert_popup ${alert ? "pop_open" : ""}`}>
      <div className="mypage_alert_box">
        <div className="mypage_alert_inner">
          <h1 className="mypage_alert_title">상품 주문 알림</h1>
          <p className="mypage_alert_content">이 상품을 주문하시겠습니까?</p>
          <div className="mypage_alert_buttons">
            <Link to="/order">주문</Link>
            <Link to="/inquiry">문의하기</Link>
          </div>
          <button className="popup_close" onClick={popClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertPop;
