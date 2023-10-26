import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
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

// Object of Style, which we will pass as CSS inline styling
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
