import React from "react";
import { Routes, Route, Navigate } from "react-router";
import BusinessDetails from "./components/BusinessDetails";
import Listings from "./containers/Listings";
import Login from "./components/Login";
import AddListing from "./containers/AddListing";

const ProtectedRoute = (props) => {
  console.log(props);

  const { component: Component, isLoggedIn, ...rest } = props;

  const userLoggedIn = isLoggedIn;

  return userLoggedIn ? <Component /> : <Navigate to="/login" />;
};

function Router(props) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Listings
              isLoggedIn={props.isLoggedIn}
              setIsLoggedIn={props.setIsLoggedIn}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              isLoggedIn={props.isLoggedIn}
              setIsLoggedIn={props.setIsLoggedIn}
            />
          }
        />
        <Route path="/details/:id" element={<BusinessDetails />} />

        <Route
          path="/addlisting"
          element={
            <ProtectedRoute
              isLoggedIn={props.isLoggedIn}
              setIsLoggedIn={props.setIsLoggedIn}
              background="outlined"
              component={AddListing}
            />
          }
        />
      </Routes>
    </>
  );
}

export default Router;
