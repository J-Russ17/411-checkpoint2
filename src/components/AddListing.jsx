import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./addlisting.module.css";

function AddListing(props) {
  const [listing, setListing] = useState({
    name: "",
    description: "",
    address: "",
    operating_hours: "",
  });

  const handleChange = (event) => {
    const newState = { ...listing };
    newState[event.target.name] = event.target.value; // Using name instead of id
    setListing(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { ...listing };
    payload.id = props.restaurants.length + 1;
    delete payload.open;
    console.log(payload);
    props.addListing(payload);
    setListing({
      name: "",
      description: "",
      address: "",
      operating_hours: "",
    });
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          type="text"
          value={listing.name}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          name="address"
          label="Address"
          type="text"
          value={listing.address}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          name="operating_hours" // Changed the name to match state property
          label="Hours"
          type="text"
          value={listing.operating_hours}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          name="description"
          label="Description"
          type="text"
          value={listing.description}
          onChange={handleChange}
          variant="standard"
        />
        <Button type="submit">SAVE</Button>
      </form>
    </>
  );
}

export default AddListing;
