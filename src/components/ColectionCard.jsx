import React from "react";
import "./styles/ColectionCard.css";
import testPhoto from "../assets/testPhoto.JPG";
import fav from "../assets/fav.png";

const ColectionCard = () => {
  return (
    <div className="colection__container">
      <div className="colection__block">
        <img src={testPhoto} alt="" />
        <img id="colection__fav" src={fav} alt="" />
        <div className="colection__textBottom">
          <h5>Lorem ipsum dolor sit.</h5>
          <h5>50, 50</h5>
          <span>Delicous Demi</span>
        </div>
      </div>
    </div>
  );
};

export default ColectionCard;
