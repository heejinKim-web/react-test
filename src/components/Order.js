import React, { useState, useEffect } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/order.scss";

import { OrderData } from "../DummyData/OrderData";

/*accordion 설정*/
const Order = () => {
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

  /*dummyData 불러오기*/
  const [dummyData, setDummyData] = useState(OrderData);
  const orderData = dummyData?.orderData?.[0] || {};

  /*개인정보/배송지 설정*/
  const [orderInfo, setOrderInfo] = useState({
    ordername: "",
    ordercellphone: "",
    orderzipcode: "",
    orderaddress1: "",
    orderaddress2: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo({ ...orderInfo, [name]: value });
  };

  /*포인트 사용*/
  const [points, setPoints] = useState(0);
  const usePoints = (e) => {
    e.preventDefault();
    setPoints(orderData.points);
  };

  /*배송 메시지 선택*/
  const [shipmessage, setShipMessage] = useState("");

  /*결제수단 선택*/
  const [payment, setPayment] = useState("");

  /*button form 전송 막기*/
  const PreventDefault = (e) => {
    e.preventDefault();
  };

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
    <div className="order" style={{ paddingTop: isMobile ? "100px" : "" }}>
      <Header />
      <div className="order_container">
        <form action="">
          <div className="order_title">
            <h1>Order / Payment</h1>
          </div>
          <div className="cell order_address">
            <h2>배송지</h2>
            <div className="input_div order_name">
              <label htmlFor="ordername">수령인</label>
              <div className="input_div_inner">
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  className="full_input"
                  id="ordername"
                  name="ordername"
                  value={orderInfo.ordername}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="input_div order_cellphone">
              <label htmlFor="ordercellphone">휴대폰</label>
              <div className="input_div_inner">
                <input
                  type="text"
                  placeholder="010-0000-0000"
                  id="ordercellphone"
                  name="ordercellphone"
                  className="input_not_full not_full_1"
                  value={orderInfo.ordercellphone}
                  onChange={onChange}
                />
                <button className="order_button" onClick={PreventDefault}>
                  인증
                </button>
              </div>
            </div>
            <div className="input_div order_address_input">
              <label htmlFor="orderzipcode">주소</label>
              <div className="input_div_inner">
                <input
                  type="text"
                  className="input_not_full not_full_2"
                  id="orderzipcode"
                  placeholder="우편번호"
                  name="orderzipcode"
                  value={orderInfo.orderzipcode}
                  onChange={onChange}
                />
                <button className="order_button" onClick={PreventDefault}>
                  우편번호
                </button>
              </div>
              <div className="input_div_inner">
                <input
                  type="text"
                  className="full_input"
                  id="orderaddress1"
                  placeholder="기본주소"
                  name="orderaddress1"
                  aria-label="기본주소"
                  value={orderInfo.orderaddress1}
                  onChange={onChange}
                />
              </div>
              <div className="input_div_inner">
                <input
                  type="text"
                  className="full_input"
                  id="orderaddress2"
                  placeholder="우편번호"
                  name="orderaddress2"
                  value={orderInfo.orderaddress2}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="cell order_coupon">
            <div className="order_coupon_title">
              <h2>쿠폰</h2>
              <p>{orderData.coupons.length || 0}장 보유</p>
            </div>
          </div>
          <div className="cell order_credit">
            <h2>적립금</h2>
            <div className="input_div credit">
              <div className="input_div_inner">
                <input
                  type="text"
                  placeholder="0"
                  id="credit"
                  name="credit"
                  className="input_not_full not_full_2"
                  disabled
                  value={points}
                />
                <button className="order_button" onClick={usePoints}>
                  모두사용
                </button>
              </div>
            </div>
            <p>
              * 보유 적립금 {orderData.points.toLocaleString()}원 (최소 사용금액
              5,000원)
            </p>
          </div>
          <div className="cell order_shipping">
            <h2>배송 메세지</h2>
            <div className="checkbox_div">
              <input
                type="radio"
                id="ship1"
                name="ship1"
                value="부재 시 경비실에 맡겨주세요"
                onClick={(e) => setShipMessage(e.target.value)}
              />
              <label htmlFor="ship1">부재 시 경비실에 맡겨주세요</label>
            </div>
            <div className="checkbox_div">
              <input
                type="radio"
                id="ship2"
                name="ship1"
                value="부재 시 문 앞에 놓아주세요"
                onClick={(e) => setShipMessage(e.target.value)}
              />
              <label htmlFor="ship2">부재 시 문 앞에 놓아주세요</label>
            </div>
            <div className="checkbox_div">
              <input
                type="radio"
                id="ship3"
                name="ship1"
                value="배송 전 미리 연락 부탁드립니다"
                onClick={(e) => setShipMessage(e.target.value)}
              />
              <label htmlFor="ship3">배송 전 미리 연락 부탁드립니다</label>
            </div>
          </div>
          <div className="cell order_privacy">
            <h2>개인정보 수집 및 이용동의</h2>
            <select
              className="privacy_select"
              defaultValue="개인정보 수집 및 이용 동의 (필수)"
            >
              <option disabled value="개인정보 수집 및 이용 동의 (필수)">
                개인정보 수집 및 이용 동의 (필수)
              </option>
              <option value="동의">동의</option>
              <option value="비동의">비동의</option>
            </select>
          </div>
          <div className="cell order_goods">
            <h2>주문상품 정보</h2>
            <div className="order_goods_list">
              {orderData.orderProducts?.map((product, index) => (
                <div className="order_goods_list_cell" key={product.id}>
                  <div className="order_goods_photo">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/order/${product.img}`}
                    />
                  </div>
                  <div className="order_goods_text">
                    <p className="order_good_name">{product.name}</p>
                    <p className="order_good_option">{product.option}</p>
                    <p className="order_good_price">
                      {product.price.toLocaleString()}원
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cell order_price">
            <div className="order_price_list">
              <ul>
                <li>
                  <p className="order_price_cate">상품금액</p>
                  <p className="price_number">
                    {orderData.itemPrice.toLocaleString()}원
                  </p>
                </li>
                <li>
                  <p className="order_price_cate">배송비</p>
                  <p className="price_number">
                    +{orderData.shipPrice.toLocaleString()}원
                  </p>
                </li>
                <li>
                  <p className="order_price_cate">쿠폰사용</p>
                  <p className="price_number">-0원</p>
                </li>
              </ul>
            </div>
            <div className="order_price_total">
              <p className="price_total_cate">총 결제금액</p>
              <p className="price_total_number">
                {(orderData.totalPrice - points).toLocaleString()}원
              </p>
            </div>
          </div>
          <div className="cell order_payment">
            <h2>결제수단</h2>
            <ul className="payment_radio_list">
              <li>
                <input
                  type="radio"
                  id="payment1"
                  name="payment"
                  value="신용카드"
                  onClick={(e) => setPayment(e.target.value)}
                />
                <label htmlFor="payment1">신용카드</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="payment2"
                  name="payment"
                  value="실시간 계좌이체"
                  onClick={(e) => setPayment(e.target.value)}
                />
                <label htmlFor="payment2">실시간 계좌이체</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="payment3"
                  name="payment"
                  value="무통장입금"
                  onClick={(e) => setPayment(e.target.value)}
                />
                <label htmlFor="payment3">무통장입금</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="payment4"
                  name="payment"
                  value="휴대폰결제"
                  onClick={(e) => setPayment(e.target.value)}
                />
                <label htmlFor="payment4">휴대폰결제</label>
              </li>
            </ul>
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
            <p>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
            <button type="submit">
              {(orderData.totalPrice - points).toLocaleString()} won 결제하기
            </button>
            <p>*가상계좌 입금시 안내된 시간 내에 입금 완료하셔야 합니다.</p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
