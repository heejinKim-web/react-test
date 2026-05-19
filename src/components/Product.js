import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/sub.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { ShopData } from "../DummyData/ShopData";

const Product = () => {
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
  const slideImg = shopData.productData[0].productImg;

  return (
    <div className="product">
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
            <form>
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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
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
                    <button className="count_button minus">-</button>
                    <span className="count_number">1</span>
                    <button className="count_button plus">+</button>
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
            <ul>
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
            {tabid === 1 && <div>1</div>}
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
