import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";

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

const Grocery = lazy(() => import("./components/Grocery"));

// Object of Style, which we will pass as CSS inline styling
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
