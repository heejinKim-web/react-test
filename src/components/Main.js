import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../style/main.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";

const Main = () => {
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
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide1.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide2.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide3.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide4.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide5.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide1.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide5.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide4.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/slide3.png`}
                alt="슬라이드1"
              />
            </a>
          </SwiperSlide>
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
      </div>
    </div>
  );
};

export default Main;
