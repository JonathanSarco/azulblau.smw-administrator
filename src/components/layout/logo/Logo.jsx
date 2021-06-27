import React from "react";
import whiteAzulBlau from "../../../assets/azul_blau_white.png";
import "./Logo.scss";

function Logo() {
  let azulBlau = whiteAzulBlau;

  return (
    <div className="container-img">
        <img className="container-img__img" alt="azul-blau" src={azulBlau} />
    </div>
  );
}

export default Logo;
