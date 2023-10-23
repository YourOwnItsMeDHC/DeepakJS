import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

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
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Above line , is just array destructuring, of an array "useState(resList)"
  // Array destructuring : https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/

  // One another way of writing the same thing
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;

  // One another way of writing the same thing
  // const arr = useState(resList);
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];

  /*
   Monolithic architecture contains all code(UI, Auth, Backend, API, etc codes) in one place(service)
   
   Microservice architecture contains each code(UI, Auth, Backend, API, etc codes) in separate place(service)
   i.e. UI in UI service, Auth in Aut service, etc.
   Each service can be written in any language i.e. UI service in React, Database service in Python,
   backend service in Java, etc.
   Each service will have it's own port address i.e. UI service has 1080, Database service has 6545,
   backend service has 9565, etc.

   Microservice architecture is also called as "Sing responsibility architecture" or "Separation of concern".

   Ways of calling an API :
   1. Load webapp ==> call API(wait for fetching data)-eg:500ms ==> Render the fetched data onto the browser

   2. Load webapp ==> Render whatever is there at that particular instant i.e. at that instant we will only
                      be having structure of our web app
                  ==> Call API(wait for fetching data)-eg:500ms, till that we do have structure, we will add
                      Shimmering effect onto it
                  ==> Re-render the fetched data onto the browser

   2nd way is widely accepted, even though it is rendering twice, because React has very fast rendering mechanism               
   
   
   useEffect hook has 2 arguments : 1. A call back function , 2. Dependency array
   ======>                        useEffect(() => {}, []);
   Here, AFTER rendering of the component, these call back function will be called

   const BodyComponent = () =>{
    useEffect(() => {
      console.log("Body componenet has been rendered"); // 2nd it will be printed
    }, []);

    console.log("Body componenet rendered, but useEffect hasn't been called yet"); // 1st it will be printed
   }

  Output :
  Body componenet rendered, but useEffect hasn't been called yet
  Body componenet has been rendered


  So, here we have to use 2nd way of calling an API.
  So, here firstly render the componenet, and we will get whatever is there at that particular instant i.e. at that instant we will only
  be having structure of our web app.
  And, then now rendering is done.
  So, after the rendering of component, useEffect will be called, so inside these useEffect hook we will
  calling our API to fetch the data.
  */

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData function will be async, because, I want that, data should get fetched first from an API call
  // Until that wait for it to be fetched
  // Then, convert that data onto the JSON
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    //setListOfRestaurants(resList);
  };

  // ****************** Conditional Rendering ************************************
  // Rendering on the basis of a condition is known as Conditional Rendering
  // If nothing got fetched from an API, we will update it by default restaurants
  if (listOfRestaurants === undefined) {
    setTimeout(() => {
      setListOfRestaurants(resList);
      <Shimmer />;
    }, 2000);
    return <Shimmer />;
  }

  // ****************** Conditional Rendering ************************************
  // If it is able to fetch restaurants from an API, but it takes time, so by that time, shimmering or loading
  // effect will be there
  if (listOfRestaurants === 0) {
    return <Shimmer />;
  }

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
