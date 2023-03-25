import React from "react";
import "./section3.css";
const Section3 = () => {
  return (
    <div className="section3">
      <p className="heading">WHY GREENOVATE?</p>
      

          <h1 className="headingContent">
            The sustainability guide for leading companies
          </h1>
          <img className="img-down" src="./img.png" alt="" />

      

      <p className="data data1">Our personlized enviromental reports helps companies meet </p>
      <p className="data">their targets easily and help them become friendly for enviroment</p>
      <p class="data1">Greenovate</p>
      <img className="broker"
        loading="lazy"
        height="32"
        alt="Interactive Brokers logo"
        src="https://assets.website-files.com/6266b5e20215f61058171191/62793df31bebd9a3eb1e63a9_logo-interactivebrokers.svg"
      />
    </div>
  );
};

export default Section3;
