import React from "react";
import "./styles/Favorites.css";
import favIcon from "../assets/fav-icon.png";
import testPhoto from "../assets/secton1-photo2.png";
import starTrue from "../assets/start-true.svg";
import starFalse from "../assets/star-false.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="favorites__container">
      <div className="favorites__category">
        <Link to="/">
        <span>Главная страница</span>
        </Link>
        <img src={favIcon} alt="" />
        <span>Избранное</span>
        <img src={favIcon} alt="" />
        <span>Название категории</span>
      </div>
      <div className="favorites__allProducts">
        <div className="favorites__topText">
          <h2>ИЗБРАННОЕ</h2>
          <h5>1 ТОВАР</h5>
          <div className="line" style={{width: "85vw"}}></div>
        </div>
        <div className="favorites__cards-container">
          <div className="favorites__card">
            <img className="favorites__card_photo" src={testPhoto} alt="" />
            <div className="star">
              <img src={starTrue} alt="" />
              <img src={starTrue} alt="" />
              <img src={starTrue} alt="" />
              <img src={starFalse} alt="" />
              <img src={starFalse} alt="" />
            </div>
            <span>Название предмета</span>
            <div className="favorites__price-cart">
              <span>2500 сом</span>
              <img src={cart} alt="" />
            </div>
            <div className="favorites__btns">
              <select className="favorites__size">
                <option value="" selected>РАЗМЕРЫ</option>
                <option value="">AA</option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
                <option value="">DD</option>
                <option value="">DDD</option>
                <option value="">G</option>
                <option value="">H</option>
                <option value="">J</option>
              </select>
              <button>
                Добавить в <br /> корзину
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Favorites;
