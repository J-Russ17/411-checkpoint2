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
    newState[event.target.id] = event.target.value;
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
          id="standard-basic"
          value={listing.name}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          name="address"
          label="Address"
          type="text"
          id="standard-basic"
          value={listing.address}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          name="hours"
          label="Hours"
          type="text"
          id="standard-basic"
          value={listing.operating_hours}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          name="description"
          label="Description"
          type="text"
          id="standard-basic"
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
