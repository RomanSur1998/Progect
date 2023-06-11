import React from "react";
import "./styles/Header.css";
import Logo from "../assets/Logo.png";
import Love from "../assets/love.png";
import Search from "../assets/search.png";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <span>ТУТ РЕКЛАМА КАКАЯ НИБУДЬ </span>
      </div>
      <div className="header__container">
        <img src={Logo} alt="" />
        <div className="header__text">
          <h1>INTIM</h1>
          <h1>ATE</h1>
        </div>
        <div className="header__right">
          <div className="header__favorites">
            <img src={Love} alt="" />
            <span>Избранное</span>
          </div>
          <div className="header__search">
            <input type="text" placeholder="Что вы ищите?" />
            <img src={Search} alt="" />
          </div>
        </div>
      </div>
        <div className="header__bottom">
          <a href="">БЮСТГАЛЬТЕРЫ</a>
          <a href="">ТРУСИКИ</a>
          <a href="">КОМПЛЕКТЫ</a>
          <a href="">КУПАЛЬНИКИ</a>
          <a href="">БАЗОВОЕ БЕЛЬЕ</a>
          <a href="">SEXY БЕЛЬЕ</a>
          <a href="">БЕЛЬЕ ДЛЯ КОРМЯЩИХ</a>
          <a href="">НОЧНУШКИ</a>
          <a href="">БЕЛЬЕ ДЛЯ БЕРЕМЕННЫХ</a>
        </div>
    </>
  );
};

export default Header;
