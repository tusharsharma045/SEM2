import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Nested = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>Nested Component</h4>
      {user ? (
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Course: {user.course}</li>
        </ul>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default Nested;