import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h2>
        {err.status} - {err.statusText}
      </h2>
      <h2>{err.data}</h2>
      <a href="/">
        <button>Take me to the Home Page</button>
      </a>
    </div>
  );
};
export default Error;
