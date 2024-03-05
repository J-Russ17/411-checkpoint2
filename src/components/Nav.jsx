import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

export default function NavMenu(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={styles.link} to="/">
              Austin Small Business
            </Link>
          </Typography>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            <Link className={styles.link} to="/">
              Listings
            </Link>
          </Button>
          {props.isLoggedIn === true ? (
            <>
              <Button color="inherit" sx={{ textTransform: "none" }}>
                <Link className={styles.link} to="/addlisting">
                  Add
                </Link>
              </Button>
              <Button
                onClick={() => {
                  props.setIsLoggedIn(false);
                }}
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                <Link className={styles.link} to="/login">
                  Logout{" "}
                </Link>
              </Button>
            </>
          ) : (
            <Button color="inherit" sx={{ textTransform: "none" }}>
              <Link className={styles.link} to="/login">
                Login{" "}
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
