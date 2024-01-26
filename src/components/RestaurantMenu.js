import React from "react";
import Shimmer from "./Shimmer";
import { MENU_API, MENU_ITEM_TYPE_KEY } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // Restaurant Info
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  // Set menu item data
  const menuItemsData =
    resInfo?.cards
      .find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
      ?.map((x) => x.itemCards)
      .flat()
      .map((x) => x.card?.info) || [];

  // Ternary Operator
  return (
    <div className="menu">
      <h1>{name}</h1>
      <img
        src={
          `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
          cloudinaryImageId
        }
      ></img>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {console.log(resInfo?.cards[0]?.card?.card?.info?.name)}
      <h2>Menu :</h2>
      <ul>
        {menuItemsData.map((food) => {
          return (
            <li key={food.id}>
              {food.name} - {"Rs. "}{" "}
              {food.price / 100 || food.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
