import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // I have to execute the logic of online/offline status, only once
  // Hence, here, I will be using useEffect(), with an empty dependency array
  // Here, we are using an empty dependency array, because we want it to run only once
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;


