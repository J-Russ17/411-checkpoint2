import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function AddListing({ addListing, restaurants }) {
  const [listing, setListing] = useState({
    name: "",
    description: "",
    address: "",
    operating_hours: "",
  });

  const handleChange = (event) => {
    const newListing = { ...listing };
    newListing[event.target.id] = event.target.value;
    setListing(newListing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { ...listing };
    payload.id = restaurants.length + 1;
    delete payload.open;
    console.log(payload);
    addListing(payload);
    setListing({
      name: "",
      description: "",
      address: "",
      operating_hours: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          type="text"
          id="name"
          value={listing.name}
          onChange={handleChange}
        />
        <TextField
          name="address"
          label="Address"
          type="text"
          id="address"
          value={listing.address}
          onChange={handleChange}
        />
        <TextField
          name="hours"
          label="Hours"
          type="text"
          id="operating_hours"
          value={listing.operating_hours}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="Description"
          type="text"
          id="description"
          value={listing.description}
          onChange={handleChange}
        />
        <Button type="submit">Add Listing</Button>
      </form>
    </>
  );
}

export default AddListing;
