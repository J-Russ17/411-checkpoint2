import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Login from "./Login";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Austin Small Business</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/">Listings</Link>
          </Button>

          <Button color="inherit">
            <Link to="/login">Login </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
