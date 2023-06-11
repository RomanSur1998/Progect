import React from "react";
import "./styles/Main.css";
import img1 from "../assets/section1-photo1.png";
import img2 from "../assets/secton1-photo2.png";
import img3 from "../assets/section1-photo3.png";
import Cards from "./Cards";
import CollectionList from "./CollectionList";
import ColectionCard from "./ColectionCard";
import img4 from "../assets/image 6.png";
import img5 from "../assets/image 13.png";
import img6 from "../assets/image 14.png";
import img7 from "../assets/image 15.png";
import img8 from "../assets/image 16.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
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
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
      <section className="main__section3">
        <img src={img4} alt="" />
        <img src={img4} alt="" />
        <div className="section3__text">
          <h2 className="section3__text__text1">ЗДЕСЬ АКЦИЯ ИЛИ РЕКЛАМА</h2>
          <h2 className="section3__text__text2">ЗДЕСЬ АКЦИЯ ИЛИ РЕКЛАМА</h2>
        </div>
      </section>
      <section className="main__section4"></section>

      <section className="main__section5">
        <hr className="section5__hr1" />
        <div className="section5__text">
          <h2 className="section5__text__text1">INSTAGRAM</h2>
          <h3 className="section5__text__text2">@intimmate</h3>
          <h3 className="section5__text__text3">@intimmate_osh</h3>
        </div>
        <hr className="section5__hr2" />
        <div className="section5__img-container">
          <img src={img5} alt="" className="section5__img section__img1" />
          <img src={img6} alt="" className="section5__img section__img2" />
          <img src={img7} alt="" className="section5__img section__img3" />
          <img src={img8} alt="" className="section5__img section__img4" />
        </div>
        <hr />
      </section>
    </div>
  );
};

export default Main;
