import React from "react";
import { useParams } from "react-router";
import data from "../data";
import MyComponent from "./GoogleMaps";

function BusinessDetails(props) {
  let { id } = useParams();
  console.log(id);

  const details = data.find((item) => item.id === Number(id));
  console.log(details);
  return (
    <div>
      <h1>{details.name}</h1>
      <h2>{details.address}</h2>
      <h3>{details.operating_hours}</h3>
      <p>{details.description}</p>
      <MyComponent />
    </div>
  );
}

export default BusinessDetails;
