import { INC, DEC, SET_USER } from "../actions/action-types";

const initialState = {
  count: 1,
  user: undefined,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case INC:
      return { ...state, count: state.count + 1 };
    case DEC:
      return { ...state, count: state.count - 1 };
    case SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
