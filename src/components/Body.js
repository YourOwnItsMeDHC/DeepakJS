import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
  // console.log("Body Rendered");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Instead of updating listOfRestaurants, we will update another state variable "filteredRestaurant"
  // And, we will keep listOfRestaurants for reference purpose, we won't update it
  // We will only be updating listOfRestaurants only once, when we are fetching it from an API.
  // We will put default list of restaurants i.e. resList in these filteredRestaurants, so the very first time
  // When our website gets loaded, it will display these default list of restaurants i.e. resList
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  // Whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)

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

    // I will update filteredRestaurants with our listOfRestaurants
    // Instead of updating listOfRestaurants, we will update another state variable "filteredRestaurant"
    // And, we will keep listOfRestaurants for reference purpose, we won't update it
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    //setListOfRestaurants(resList);
  };

  // ****************** Conditional Rendering ************************************
  // Rendering on the basis of a condition is known as Conditional Rendering
  // If nothing got fetched from an API, we will update it by default restaurants
  if (listOfRestaurants === undefined) {
    setTimeout(() => {
      setListOfRestaurants(resList);

      // I will update filteredRestaurants with our listOfRestaurants
      // Instead of updating listOfRestaurants, we will update another state variable "filteredRestaurant"
      // And, we will keep listOfRestaurants for reference purpose, we won't update it
      setFilteredRestaurants(resList);

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
        <div className="search">
          <input
            type="text"
            className="search-box"
            // value of searchText has been tied up with the value attribute
            // SO, the each time, I will enter something in the search box, searchText state variable
            // will get updated using setSearchText function
            value={searchText}
            // onChange={(e) => {
            //   setSearchText(e.target.value);
            //   console.log(searchText);
            // }}
            // onClick={() => {
            //   const filteredRestaurant = listOfRestaurants.filter((res) =>
            //     res.data.name.toLowerCase().includes(searchText.toLowerCase())
            //   );
            //   setListOfRestaurants(filteredRestaurant);
            //   console.log(filteredRestaurant);
            // }}

            // below onChange will show filtered restaurants on go i.e. as we keep on typing the name
            // of restaurant, it will keep on showing us restaurants based on the typed text
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          />
          <button
            onClick={() => {
              // When I search for a particular restaurant, it will display that to me, and also updates
              // filteredRestaurants state variable
              // So, the next time when I search for a particular restaurant, it should not search in that
              // updated restaurants, it should search in the entire 15 original restaurants
              // If it is not done, then even if we do have a restaurant, it might not get searched
              // Hence, we should always filter our original restaurants i.e. listOfRestaurants
              // Here, listOfRestaurants won't get update, because filter() fuinction does not mutate array
              // Instead,it creates another array which will stored in filteredRestaurant, and I will be using
              // that newly filtered array "filteredRestaurant"
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              if (searchText === "") {
                // setListOfRestaurants(resList);
                setFilteredRestaurants(resList); // Then just display default list of restaurants
              }
              // If no restaurant found which includes text entered in it's name
              // So, filteredRestaurant array will be having length of 0, because,
              // it doesn't have any restaurant object
              // Hence, after showing an alert message, show default list of restaurants, and make that
              // search box field empty, so next time the user can enter correctly
              else if (filteredRestaurant.length === 0) {
                alert(`No restaurant found with the name ${searchText}`);
                setFilteredRestaurants(resList);
                setSearchText("");
              } else {
                setFilteredRestaurants(filteredRestaurant);
                if (searchText === "") {
                  setFilteredRestaurants(resList); // Then just display default list of restaurants
                }
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurants.filter((res) => {
              return res.data.avgRating > 4;
            });
            setFilteredRestaurants(filteredList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Applying map function to resList array, in which each element is an object which represents
          an restaurant card, I will take each index i.e. an element and pass it as a value for resData prop */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
