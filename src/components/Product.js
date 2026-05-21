import React, { useState, useEffect, useRef } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/sub.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { ShopData } from "../DummyData/ShopData";

const Product = () => {
  const pageRef = useRef(null);

  useEffect(() => {
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

  /*swiper*/
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  /*tabs*/
  const tabs = [
    {
      tabid: 1,
      tabname: "상세정보",
    },
    {
      tabid: 2,
      tabname: "배송정보",
    },
    {
      tabid: 3,
      tabname: "리뷰 (128)",
    },
    {
      tabid: 4,
      tabname: "문의",
    },
  ];

  const [tabid, setTabId] = useState(1);
  const tabOnClick = (id) => {
    setTabId(id);
  };

  /*dummyData 데이터 가져오기*/
  const [shopData, setShopData] = useState(ShopData);

  /*swiper slide img*/
  const slideImg = shopData.productData[0].productImg;

  /*color picker*/
  const productColors = shopData.productData[0].colorPicks;
  const [colorId, setColorId] = useState(0);
  const colorPick = (i) => {
    setColorId(i);
  };

  /*count*/
  const [count, setCount] = useState(1);
  const onClickMinus = (e) => {
    e.preventDefault();
    if (count !== 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const onClickPlus = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className="product" ref={pageRef}>
      <Header />
      <div className="container">
        <div className="product_upper_frame">
          <div className="product_thumbnail_slider">
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              modules={[FreeMode, Navigation, Thumbs]}
              className="productSwiper"
            >
              {slideImg?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL}/image/product/${slideImg[index]}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={5}
              spaceBetween={12}
              FreeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="productSwiper2"
            >
              {slideImg?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL}/image/product/${slideImg[index]}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="product_shop_buy">
            <form action="/react-test/#/order">
              <div className="product_shop_buy_upper">
                <div className="product_stars">
                  <ul className="stars">
                    <li>
                      <img src={`${process.env.PUBLIC_URL}/image/star.svg`} />
                    </li>
                    <li>
                      <img src={`${process.env.PUBLIC_URL}/image/star.svg`} />
                    </li>
                    <li>
                      <img src={`${process.env.PUBLIC_URL}/image/star.svg`} />
                    </li>
                    <li>
                      <img src={`${process.env.PUBLIC_URL}/image/star.svg`} />
                    </li>
                    <li>
                      <img src={`${process.env.PUBLIC_URL}/image/star.svg`} />
                    </li>
                  </ul>
                  <p className="product_review_count">(128)</p>
                </div>
                <div className="product_name_box">
                  <h1>로우박스</h1>
                  <p>깔끔한 디자인의 다용도 수납 박스</p>
                </div>
                <div className="product_price">
                  <p className="sale_percent">
                    <span className="origin_price">29,000원</span>
                    <span className="percent">30%</span>
                  </p>
                  <p className="saled_price">20,300원</p>
                </div>
                <div className="shipping">
                  <p className="ship_title">배송비</p>
                  <p className="ship_price">3,000원 (50,000원 이상 무료배송)</p>
                </div>
                <div className="color_picker">
                  <p className="color_pick_title">색상</p>
                  <ul className="color_pick_module">
                    {productColors?.map((color, index) => (
                      <li
                        className={`${colorId === index ? "active" : ""}`}
                        key={index}
                        style={{ backgroundColor: color }}
                        onClick={() => colorPick(index)}
                      ></li>
                    ))}
                  </ul>
                </div>
                <div className="size_input">
                  <p className="size_input_title">사이즈</p>
                  <input
                    type="text"
                    className="size_inputbox"
                    placeholder="사이즈를 작성해주세요."
                  />
                </div>
                <div className="product_count">
                  <p className="product_count_title">수량</p>
                  <div className="product_count_module">
                    <button
                      className="count_button minus"
                      onClick={onClickMinus}
                    >
                      -
                    </button>
                    <span className="count_number">{count}</span>
                    <button className="count_button plus" onClick={onClickPlus}>
                      +
                    </button>
                  </div>
                </div>
                <div className="total_price">
                  <p className="total_price_title">총 상품금액</p>
                  <p className="total_price_number">20,300원</p>
                </div>
                <div className="shop_buy_buttons">
                  <button className="cart_button">장바구니</button>
                  <button className="buy_button">구매하기</button>
                </div>
                <div className="shop_share_buttons">
                  <button className="pick_share">
                    <p>
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/image/heart.svg`}
                        />
                      </span>
                      찜하기
                    </p>
                  </button>
                  <button className="sns_share">
                    <p>
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/image/share.svg`}
                        />
                      </span>
                      공유하기
                    </p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="product_tab_frame">
          <div className="product_tabs">
            <ul className="tab_list">
              {tabs.map((tab, index) => (
                <li
                  className={`tab ${tabid === tab.tabid ? "active" : ""}`}
                  key={tab.tabid}
                  onClick={() => tabOnClick(tab.tabid)}
                >
                  {tab.tabname}
                </li>
              ))}
            </ul>
            {tabid === 1 && (
              <div className="tab_product_info">
                <div className="product_info_title">
                  <h2>심플한 디자인, 다양한 활용</h2>
                  <p>
                    깔끔한 디자인으로 어디에나 잘 어울리는 로우박스입니다.
                    <br />
                    다양한 크기와 색상으로 나만의 수납공간을 만들어보세요.
                  </p>
                </div>
                <div className="product_info_photo">
                  <div className="photo1">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/product/info_1.png`}
                    />
                  </div>
                  <div className="photo2">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/product/info_2.png`}
                    />
                  </div>
                </div>
                <div className="product_info_footer">
                  <p className="title">제품 사양</p>
                  <ul className="product_info_list">
                    <li>
                      <span>재질</span>
                      <p>PP, ABS</p>
                    </li>
                    <li>
                      <span>원산지</span>
                      <p>대한민국</p>
                    </li>
                    <li>
                      <span>제조사</span>
                      <p>케이스맨</p>
                    </li>
                    <li>
                      <span>KC인증</span>
                      <p>CB063R123-0001</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {tabid === 2 && <div>2</div>}
            {tabid === 3 && <div>3</div>}
            {tabid === 4 && <div>4</div>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
