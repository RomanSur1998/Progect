import DetailsPhoto from "../assets/3-pack-port_800x.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/DetailsCard.css";
import { Link } from "react-router-dom";
import favIcon from "../assets/fav-icon.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import startTrue from "../assets/start-true.svg";
import startFalse from "../assets/star-false.svg";
import fav from "../assets/favoritesDetails.png";

const DetailsCard = () => {
  const PrevButton = ({ onClick }) => (
    <button onClick={onClick}>
      <img style={{ width: "14px" }} src={arrowLeft} alt="" />
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button onClick={onClick}>
      <img style={{ width: "14px" }} src={arrowRight} alt="" />
    </button>
  );
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };
  return (
    <>
      <div className="details__category">
        <Link to="/">
          <span>Главная страница</span>
        </Link>
        <img src={favIcon} alt="" />
        <span>Детальный обзор</span>
        <img src={favIcon} alt="" />
        <span>Название категории</span>
      </div>
      <div className="setBlock">
        <div className="slider">
          <Slider {...settings} className="sliderBlock">
            <div className="c">
              <img src={DetailsPhoto} alt="" />
              <h3>1</h3>
            </div>
            <div>
              <img src={DetailsPhoto} alt="" />
              <h3>2</h3>
            </div>
            <div>
              <img src={DetailsPhoto} alt="" />
              <h3>3</h3>
            </div>
            <div>
              <img src={DetailsPhoto} alt="" />
              <h3>4</h3>
            </div>
            <div>
              <img src={DetailsPhoto} alt="" />
              <h3>5</h3>
            </div>
            <div>
              <img src={DetailsPhoto} alt="" />
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        <div className="details__info">
          <div className="details__stars">
            <img src={startTrue} alt="" />
            <img src={startTrue} alt="" />
            <img src={startTrue} alt="" />
            <img src={startTrue} alt="" />
            <img src={startFalse} alt="" />
            <span>(1)</span>
          </div>
          <h3 className="details__productName">Sophie-Non-Padded Undervired</h3>
          <h3 className="details__productName">Bra - Black</h3>
          <span className="details__full">Fabulous Full Cup</span>
          <h3 className="details__h3S">52, 50</h3>
          <span className="details__color-p">Цвет: черный</span>
          <div className="details__size">
            <select id="details__sizeCategory">
              <option value="" selected>
                РАЗМЕРЫ
              </option>
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
            <a href="">Нужна помощь с вашим размером?</a>
          </div>
          <div className="details__btns">
            <button>В КОРЗИНУ ПОКУПОК</button>
            <img src={fav} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
