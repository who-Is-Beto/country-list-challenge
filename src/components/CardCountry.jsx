import React from "react";
import "../styles/CardCountry.css";

function CardCountry(props) {
  return (
    <div className="card-country">
      <div className="country-image-container">
        <img src={props.flag} alt="" loading="lazy" className="country-image" />
      </div>
      <div className="data-country">
        <h4 className="country-title">{props.name}</h4>
        <p>
          <strong className="country-data-title">Population: </strong>
          {props.population}
        </p>
        <p>
          <strong className="country-data-title">Region: </strong>
        </p>
        <p>
          <strong className="country-data-title">Capital: </strong>df
        </p>
      </div>
    </div>
  );
}

export default CardCountry;
