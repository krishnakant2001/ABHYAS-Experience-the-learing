import React from "react";
import { useNavigate } from "react-router-dom";
import thumbnail from "../assets/image1.jpg";

const Card = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0 });
    navigate("/courses");
  };
  return (
    <div className="cardContainer" onClick={handleClick}>
      <img src={thumbnail} alt="" />
      <h2>Data Structure & Algorithms bootcamp</h2>
      <hr></hr>
      <div className="price">
        <h4 className="color">₹4000</h4>
        <h4 className="strike">₹7000</h4>
      </div>
    </div>
  );
};

export default Card;
