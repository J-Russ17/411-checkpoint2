import { useState, Component } from "react";
import "./App.css";
import NavMenu from "./components/Nav";
import data from "./data";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [restaurant, setRestaurant] = useState(data);
  return (
    <>
      <Provider store={store}>
        <NavMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Router
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          restaurant={restaurant}
          setRestaurant={setRestaurant}
        />
      </Provider>
    </>
  );
}

export default App;
