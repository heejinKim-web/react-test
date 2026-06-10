import React, { useState, useEffect, useRef } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/product.scss";
import AlertPop from "./common/AlertPop";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import { ShopData } from "../DummyData/ShopData";

const Product = () => {
  const pageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

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

  /*dummyData 데이터 가져오기*/
  const [shopData, setShopData] = useState(ShopData);
  const productInfo = shopData.productData[0];

  /*swiper slide img*/
  const slideImg = productInfo.productImg;

  /*option 선택*/
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(20300);

  /*alert popup 띄우기*/
  const [alert, setAlert] = useState(false);
  const popOpen = (e) => {
    e.preventDefault();
    setAlert(true);
  };

  return (
    <div
      className="product"
      style={{ paddingTop: isMobile ? "100px" : "" }}
      ref={pageRef}
    >
      <Header />
      <div className="container">
        <div className="product_upper_frame">
          <div className="product_thumbnail_slider">
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              modules={[Navigation, Thumbs]}
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
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
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
                <div className="product_name_box">
                  <h1>{productInfo.productName}</h1>
                  <p>{productInfo.productDesc}</p>
                </div>
                <div className="product_price">
                  <p className="sale_percent">
                    <span className="origin_price">
                      {productInfo.originPrice.toLocaleString()}원
                    </span>
                    <span className="percent">{productInfo.saleRate}%</span>
                  </p>
                  <p className="saled_price">
                    {productInfo.salePrice.toLocaleString()}원
                  </p>
                </div>
                <div className="shipping">
                  <p className="ship_title">배송비</p>
                  <p className="ship_price">
                    {productInfo.shipPrice.toLocaleString()}원 (50,000원 이상
                    무료배송)
                  </p>
                </div>
                <div className="option_select_box">
                  <select
                    className="option_select"
                    value={selectedOptionPrice}
                    onChange={(e) =>
                      setSelectedOptionPrice(Number(e.target.value))
                    }
                  >
                    {productInfo.options.map((option, index) => (
                      <option key={option.id} value={option.optionPrice}>
                        {option.optionName}
                        &ensp;
                        {option.optionPrice.toLocaleString()}원
                      </option>
                    ))}
                  </select>
                </div>
                <div className="total_price">
                  <p className="total_price_title">총 상품금액</p>
                  <p className="total_price_number">
                    {(
                      selectedOptionPrice + productInfo.shipPrice
                    ).toLocaleString()}
                    원
                  </p>
                </div>
                <div className="shop_buy_buttons">
                  <button className="cart_button">장바구니</button>
                  <button className="buy_button" onClick={popOpen}>
                    구매하기
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <AlertPop alert={alert} popOpen={popOpen} setAlert={setAlert} />
    </div>
  );
};

export default Product;
