import React from "react";
import { Feature } from "../../components";
import "./what.css";
const What = () => {
  return (
    <div className="gpt3__what section__margin" id="what">
      <div className="gpt3__what-feature">
        <Feature
          title={"Nos Services"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
      </div>
      <div className="gpt3__what-heading">
        <h1 className="gradient__text">
          Les possibilités dépassent votre imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__what-container">
        <Feature
          title={"Lorem ipsum"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
        <Feature
          title={"Lorem ipsum"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
        <Feature
          title={"Lorem ipsum"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
      </div>
    </div>
  );
};

export default What;
