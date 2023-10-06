import React from "react";
import ReactDOM from "react-dom/client";

/** ------ Planning of project ---------
   Header
    - Logo
    - Nav Items
   Body
    - Search
    - RestaurantContainer
      - RestaurantCard
        - Img
        - Name of Res, Star Rating, cuisine, delery tie
   Footer
    - Copyright
    - Links
    - Address
    - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZ3VNlGhRCe9021a-Wt2ENVpin8YVrbm9HA&usqp=CAU"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Object of Style, which we will pass as CSS inline styling
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
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
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bz9zkh2aqywjhpankb07"
      ></img>
      <h3>Deepak's Food Shop</h3>
      <h4>France, American, Indian</h4>
      <h4>4.4 stars</h4>
      <h4>25 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
