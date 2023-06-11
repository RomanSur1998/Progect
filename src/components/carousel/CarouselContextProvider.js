import React, { Children, cloneElement, useEffect, useState } from "react";
import "./Carousel.css";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";

const PAGE_WIDTH = 950;

const CarouselContextProvider = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}vw`,
            maxWidth: `${PAGE_WIDTH}vw`,
          },
        });
      })
    );
  }, []);

  const handleClickArrowLeft = () => {

    setOffset((currentOffset) => {
        const newOffset = currentOffset + PAGE_WIDTH
        return Math.min(newOffset, 0)

    })

  };

  const handleClickArrowRight = () => {

    setOffset((currentOffset) => {
        const newOffset = currentOffset - PAGE_WIDTH
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
        return Math.max(newOffset, maxOffset)

    })

  };

  return (
    <div className="carousel__container">
      <img
        className="carousel__arrow-left"
        onClick={handleClickArrowLeft}
        src={arrowLeft}
      ></img>
      <div className="carousel__window">
        <div className="carousel__all-page" style={{
            transform: `translateX(${offset}vw)`
        }}>
          {pages}
        </div>
      </div>
      <img
        className="carousel__arrow-right"
        onClick={handleClickArrowRight}
        src={arrowRight}
      ></img>
    </div>
  );
};

export default CarouselContextProvider;
