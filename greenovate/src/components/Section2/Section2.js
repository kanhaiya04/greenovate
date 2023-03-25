import React from "react";
import "./section2.scss";

const Section2 = () => {
  return (
    <div className="section2">
      <p className="heading">HOW IT WORKS</p>
      <h1 className="headingContent">
       
       
      </h1>
      <div className="row">
        <div className="col text-col">
          <div className="row">
            <div className="col">
              <h1 className="number">01</h1>
              <h1 className="number">02</h1>
              <h1 className="number">03</h1>
            </div>
            <div className="col">
              <p className="Content-heading">Measure</p>
              <p className="content">
                Get instant insights with your environmental data in one place.
              </p>
              <p className="Content-heading">Manage</p>
              <p className="content">
                Get personlized tips to meet yor targets
              </p>
              <p className="Content-heading">Report</p>
              <p className="content">
                Share your report and ask for expert advice
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            src="https://assets.website-files.com/6266b5e20215f61058171191/627ad60d82db71e0cc6a2cea_Sustain.Life-home-ui-m-01.svg"
            loading="lazy"
            alt="Cards showing net emissions less offsets and total emissions"
            id="im"
            className="img image1 no1"
          />
          <img
            src="https://assets.website-files.com/6266b5e20215f61058171191/627ad60d4bbe0c2467cb49ab_Sustain.Life-home-ui-m-02.svg"
            loading="lazy"
            alt="A card that shows a suppler score of 53 percent"
            className="img image2"
          />
          <img
            src="https://assets.website-files.com/6266b5e20215f61058171191/627ad60db3986a9b8b1d2817_Sustain.Life-home-ui-r-03.svg"
            loading="lazy"
            alt="Sample Sustain.Life impact dashboard showing emissions, spend, and offsets"
            className="img image3"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
