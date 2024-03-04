import { combineReducers } from "redux";

const user = (state = null) => state;

const restaurants = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    default:
      return state;
  }
};

export default combineReducers({ user, restaurants });
