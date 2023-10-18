import React from "react";
import { carsTypeslist } from "../../utility/modals/carList";

const index = ({ name }) => {
  return (
    <li>
      <p>Car Type: {name}</p>
    </li>
  );
};

export default index;
