import React from "react";
import "./Card.css";
const Card = ({ name }) => (
  <div className="card-container">
    <div className="status">
      <h1
        style={{
          color: "white",
        }}
      >
        hi there , Henok
      </h1>
      <button className="button">Create New Enquiry</button>
    </div>
    <div className="card-parent">
      <div className="Cards">
        <p>30,000</p>
        <p>📖 0 offers</p>
        <p>📖 incomplete</p>
        <button className="button">Complete Enquire</button>
      </div>
      <div className="Cards">
        <p>30,000</p>
        <p>📖 0 offers</p>
        <p>📖 incomplete</p>
        <button className="button">Complete Enquire</button>
      </div>
    </div>
    <div className="Cards">
      <p>30,000</p>
      <p>📖 0 offers</p>
      <p>📖 incomplete</p>
      <button className="button">Complete Enquire</button>
    </div>
  </div>
);

export default Card;
