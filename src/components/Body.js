import React from "react";
import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Applying map function to resList array, in which each element is an object which represents
          an restaurant card, I will take each index i.e. an element and pass it as a value for resData prop */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
