import {SET_CHARACTERS} from '../actions/'
const initialState = []

export default (state = initialState, {type, payload}) => {switch (type) {
  case SET_CHARACTERS:
    return payload;
  default:
    return state;
}}