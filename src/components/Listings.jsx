import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./listings.module.css";

export default function Listings(props) {
  console.log(props);
  return (
    <>
      <div className={styles.container}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="right">Hours</TableCell>
                <TableCell align="right">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(props.restaurants)}
              {props.restaurants.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link className={styles.link} to={`/details/${item.id}`}>
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{item.description}</TableCell>
                  <TableCell align="right">{item.operating_hours}</TableCell>
                  <TableCell align="right">{item.address}</TableCell>
                  <TableCell>
                    {props.isLoggedIn === true ? (
                      <DeleteIcon
                        className={styles.deleteIcon}
                        onClick={() => {
                          props.deleteListing(index);
                        }}
                      />
                    ) : null}
                    {console.log(props.isLoggedIn)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {props.isLoggedIn === false ? (
          <p className={styles.loginRequired}>
            *Must be logged in to add/delete a listing*
          </p>
        ) : null}
      </div>
    </>
  );
}
