import React from "react";
import { Routes, Route, Navigate } from "react-router";
import BusinessDetails from "./components/BusinessDetails";
import Listings from "./containers/Listings";
import Login from "./components/Login";
import data from "./data";
import AdminView from "./components/AdminView";
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
          element={<Listings restaurant={data} setRestaurant={data} />}
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
        <Route
          path="/details/:id"
          element={
            <BusinessDetails
              restaurant={props.restaurant}
              setRestaurant={props.setRestaurant}
            />
          }
        />
        <Route
          path="/adminview"
          element={
            <ProtectedRoute
              isLoggedIn={props.isLoggedIn}
              setIsLoggedIn={props.setIsLoggedIn}
              background="outlined"
              component={AdminView}
            />
          }
        />
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
