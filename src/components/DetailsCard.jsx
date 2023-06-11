import DetailsPhoto from "../assets/3-pack-port_800x.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/DetailsCard.css";

const DetailsCard = () => {
  const PrevButton = ({ onClick }) => (
    <button onClick={onClick}>Previous</button>
  );

  const NextButton = ({ onClick }) => <button onClick={onClick}>Next</button>;
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
      <div className="setBlock">
        <div>
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
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            earum nemo quidem doloremque cumque animi hic at quisquam nobis,
            libero sapiente aspernatur quae, dolore expedita temporibus ex fuga
            officiis in?{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
