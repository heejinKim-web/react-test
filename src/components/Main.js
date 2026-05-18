import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/main.scss";

import { DummyData } from "../DummyData/DummyData";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";

const Main = () => {
  /*dummyData 데이터 가져오기*/
  const [dummyData, setDummyData] = useState(DummyData);

  /*main 슬라이더 데이터 가져오기*/
  const mainSliderItems = dummyData.mainSlider;

  /*main 상품 데이터 가져오기*/
  const mainGoodsItems = dummyData.mainGoods;

  return (
    <div className="main">
      <Header />
      <div className="main_visual">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {mainSliderItems.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link}>
                <img
                  src={`${process.env.PUBLIC_URL}/image/${item.imageUrl}`}
                  alt="슬라이드1"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className="main_big_text">
          <h1>
            Refined,
            <br />
            inspired
            <br />
            packaging
          </h1>
          <p>고급스러운 디자인과 실용성을 겸비한 패키징 솔루션</p>
        </div>
        <div className="goods_list">
          <ul>
            {mainGoodsItems.slice(0, 10).map((good, index) => (
              <li key={index}>
                <Link to={good.link}>
                  <div className="goods_image">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/goods/${good.imageUrl}`}
                      alt="상품"
                    />
                  </div>
                  <div className="goods_content">
                    <h2>{good.goodsName}</h2>
                    <p>{good.price}원</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
