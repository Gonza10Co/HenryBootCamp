import { combineReducers, createStore } from "redux";
import currentItem from "./reducers/currentItem";
import results from "./reducers/results";
import suggestions from "./reducers/suggestions";

const reducer = combineReducers({
  currentItem,
  results,
  suggestions,
});

const store = createStore(reducer);

export default store;
