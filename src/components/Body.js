import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import resList from "../utils/mockData";

// React hook is just a normal utility function
// It gives useState() function , which we need to import first
// It provides a state variable, inside an array (see left side)
// It also provides a setter function for that particular state variable
// And, the default value of that state variable will be onto the right side
// which will be holded by that setter function
// Whatever value that setter function will hold, that will be the value of our state variable
//So, in order to update a state variable, we need to update that by using these setter function

// Whenever a state variable updates, react re-renders that particular component (Body component)

// Here, the scope of these state variable will be inside that particular component only, where it is getting used

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Above line , is just array destructuring, of an array "useState(resList)"
  // Array destructuring : https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;

  const arr = useState(resList);
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Applying map function to resList array, in which each element is an object which represents
          an restaurant card, I will take each index i.e. an element and pass it as a value for resData prop */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
