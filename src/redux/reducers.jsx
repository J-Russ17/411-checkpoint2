import { combineReducers } from "redux";

const user = (state = null) => state;

const restaurants = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "DELETE_LISTING":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ user, restaurants });
