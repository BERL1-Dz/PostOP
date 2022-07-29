import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Demandez un accès anticipé pour commencer</h4>
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget
          nunc sagittis maximus sit amet nec leo
        </p>
        <h4>Demandez un accès anticipé pour commencer</h4>
      </div>
    </div>
  );
};

export default Possibility;
