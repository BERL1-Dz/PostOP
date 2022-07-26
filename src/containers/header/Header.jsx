import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/gta5-1.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Construisons quelque chose d'incroyable tous ensemble
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          faucibus est. Maecenas eget elit odio. Phasellus sit amet purus eget
          nunc sagittis maximus sit amet nec leo. Integer vitae pretium nisl.
          Nam quis fringilla nunc. Quisque in commodo enim.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Inserer votre email ici" />
          <button type="button">Nous rejoindre</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people already joined" />
          <p>
            1,600 personnes ont demandé l'accès à pour nous les dernières
            24 heures
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
