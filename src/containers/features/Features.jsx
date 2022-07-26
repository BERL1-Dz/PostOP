import React from "react";
import { Feature } from "../../components";
import "./features.css";
const Features = () => {
  return (
    <div className="gpt3__features-container section__margin" id="features">
      <div className="gpt3__features-container-title">
        <h1 className="gradient__text">
          L'avenir est maintenant et vous avez juste besoin de le réaliser.
          Entrez dans l'avenir aujourd'hui et faites-le se produire..
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container-text">
        <Feature
          title={"Lorem ipsum dolor sit amet "}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
        <Feature
          title={"Lorem ipsum dolor sit amet"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
        <Feature
          title={"Lorem ipsum dolor sit amet"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
        <Feature
          title={"Lorem ipsum dolor sit amet"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget nunc sagittis maximus sit amet nec leo"
          }
        />
      </div>
    </div>
  );
};

export default Features;
