import React from "react";
import UserContext from "../context/UserContext";
import Child from "./Child";

const Parent = () => {
  const userData = {
    name: "Tushar",
    age: 20,
    course: "B.Tech"
  };

  return (
    <UserContext.Provider value={userData}>
      <h2>Parent Component</h2>
      <Child />
    </UserContext.Provider>
  );
};

export default Parent;