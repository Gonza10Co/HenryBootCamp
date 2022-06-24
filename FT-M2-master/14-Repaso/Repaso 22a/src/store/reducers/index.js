import { combineReducers } from "redux";
import app from "./app";
import characters from "./characters";

const reducer = combineReducers({ app, characters });

export default reducer;
