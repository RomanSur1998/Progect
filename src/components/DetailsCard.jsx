import React from "react";
import DetailsPhoto from "../assets/3-pack-port_800x.webp";

const DetailsCard = () => {
  return (
    <>
      <div>
        <div>
          <img src={DetailsPhoto} alt="" />
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
    </>
  );
};

export default DetailsCard;
