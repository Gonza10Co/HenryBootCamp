import { INC, DEC, SET_USER } from "./action-types";
import axios from "axios";

export const increment = () => ({ type: INC });
export const decrement = () => ({ type: DEC });
export const getUserFromAPI = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        dispatch({
          type: SET_USER,
          payload: response.data,
        });
      });
  };
};
