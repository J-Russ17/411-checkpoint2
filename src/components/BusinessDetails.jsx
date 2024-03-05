import React, { useRef, useEffect } from "react";
import { useParams } from "react-router";
import data from "../data";
import { Container } from "@mui/material";
// import MyComponent from "./GoogleMaps";

function BusinessDetails(props) {
  let { id } = useParams();
  // console.log(id);

  const details = data.find((item) => item.id === Number(id));

  const mapRef = useRef(null);

  useEffect(() => {
    if (!details) return;
    const google = window.google;
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: details.lat, lng: details.lng },
      zoom: 12,
    });
    new google.maps.Marker({
      position: { lat: details.lat, lng: details.lng },
      map: map,
      title: details.name,
    });
  }, [details]);
  console.log(details);
  return (
    <Container>
      <div>
        <h1>{details.name}</h1>
        <h2>{details.address}</h2>
        <h3>{details.operating_hours}</h3>
        <p>{details.description}</p>
        {/* <MyComponent /> */}
        <div style={{ height: "400px", width: "50%" }} ref={mapRef} />
      </div>
    </Container>
  );
}

export default BusinessDetails;
