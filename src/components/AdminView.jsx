import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function AdminView() {
  return (
    <div>
      <Button>
        <Link to="/addlisting">Add Listing</Link>
      </Button>
    </div>
  );
}

export default AdminView;
