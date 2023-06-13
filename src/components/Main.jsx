import React from "react";
import "./styles/Main.css";
import img1 from "../assets/section1-photo1.png";
import img2 from "../assets/secton1-photo2.png";
import img3 from "../assets/section1-photo3.png";
import Cards from "./Cards";
import CarouselContextProvider from "./carousel/CarouselContextProvider";
import popularSetsPhoto1 from "../assets/popularSetsPhoto1.png";
import popularSetsPhoto2 from "../assets/popularSetsPhoto2.png";
import popularSetsPhoto3 from "../assets/popularSetsPhoto3.png";
import popularSetsPhoto4 from "../assets/popularSetsPhoto4.png";
import { useNavigate } from "react-router-dom";
import section5Photo1 from "../assets/section5-photo1.png";
import section5Photo2 from "../assets/section5-photo2.png";
import section5Photo3 from "../assets/section5-photo3.png";
import section5Photo4 from "../assets/section5-photo4.png";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="line" style={{marginTop: "1rem"}}></div>
      <section className="main__section1">
        <div className="section1__container">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <div className="section1__text">
            <h2>ВАШ САМЫЙ БЛИЗКИЙ</h2>
            <h2>К ТЕЛУ МАГАЗИН</h2>
            <button
              onClick={() => {
                navigate("/collection");
              }}
            >
              В МАГАЗИН
            </button>
          </div>
        </div>
      </section>
      <section className="main__section2">
      <div className="line"></div>
        <div className="section2__top">
          <h2>ВЫБЕРИТЕ СВОЙ РАЗМЕР</h2>
          <div className="section2__category">
            <button>AA</button>
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
            <button>DD</button>
            <button>DDD</button>
            <button>G</button>
            <button>H</button>
            <button>J</button>
          </div>
        </div>
        <div className="line"></div>
        <div className="section2__bottom">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      <div className="line"></div>
      </section>
      <section className="main__section3">
        <div className="section3__top">
          <h2>
            ЗДЕСЬ АКЦИЯ <br /> НУ ИЛИ РЕКЛАМКА
          </h2>
        </div>
        <div className="section3__bottom">
          <h2>
            ЗДЕСЬ АКЦИЯ <br /> НУ ИЛИ РЕКЛАМКА
          </h2>
        </div>
      </section>
      <section className="main__section4">
        <div className="line"></div>
        <h3>ПОПУЛЯРНЫЕ КОМПЛЕКТЫ</h3>
        <div className="line"></div>
        <div className="section4__container">
          <CarouselContextProvider>
            <div className="section4__caroousel_item section4__caroousel_item1">
              <img src={popularSetsPhoto1} alt="" />
              <img src={popularSetsPhoto2} alt="" />
              <img src={popularSetsPhoto3} alt="" />
              <img src={popularSetsPhoto4} alt="" />
            </div>
            <div className="section4__caroousel_item section4__caroousel_item2">
              <img src={popularSetsPhoto2} alt="" />
              <img src={popularSetsPhoto1} alt="" />
              <img src={popularSetsPhoto4} alt="" />
              <img src={popularSetsPhoto3} alt="" />
            </div>
          </CarouselContextProvider>
        </div>
      </section>
      <section className="main__section5">
        <div className="section5__container">
          <div className="line"></div>
          <div className="section5__top-text">
            <h3>INSTAGRAM</h3>
            <div className="section5__top-link">
              <a href="#">@intimmate</a>
              <a href="#">@intimmate_osh</a>
            </div>
          </div>
          <div className="line"></div>
          <div className="section5__images">
            <img src={section5Photo1} alt="" />
            <img src={section5Photo2} alt="" />
            <img src={section5Photo3} alt="" />
            <img src={section5Photo4} alt="" />
          </div>
          <div className="line"></div>
        </div>
      </section>
    </div>
  );
};

export default Main;
