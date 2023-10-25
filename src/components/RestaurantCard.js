import React from "react";

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  //  Question mark ? means Optional Chaining - We use optional chaining in Javascript to access nested properties of objects.
  //  It returns undefined if some intermediate property of the object does not exist.
  // It solves the problem that occurs due to non-existing properties of objects.
  // https://www.scaler.com/topics/javascript-optional-chaining/

  return (
    // <div className="res-card" style={styleCard}>
    // Instead of passing styleCard object, we can direvtly pass object of styling attributes
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <span className="star">{avgRating} ⭐</span>
      </h4>
      <h4>Rs. {costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
