import React from "react";
import "./styles/Main.css";
import img1 from "../assets/section1-photo1.png";
import img2 from "../assets/secton1-photo2.png";
import img3 from "../assets/section1-photo3.png";
import Cards from "./Cards";
import CollectionList from "./CollectionList";
import ColectionCard from "./ColectionCard";
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
      <section className="main__section3"></section>
      <section className="main__section4"></section>
      <section className="main__section5"></section>
    </div>
  );
};

export default Main;
