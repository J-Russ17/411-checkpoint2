import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

export default function Login(props) {
  console.log(props);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          margin: "0 auto",
          width: "25ch",
          display: "flex",
        },
      }}
      className={styles.form}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Username" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <Button variant="contained" onClick={() => props.setIsLoggedIn(true)}>
        <Link to="/adminview">Login</Link>
      </Button>
    </Box>
  );
}