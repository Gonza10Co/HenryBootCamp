import axios from "axios";

export const SET_CHARACTERS = "characters/set"

const setCharacters = (payload) => ({ type: SET_CHARACTERS, payload });

export const clearCharacters = () => (dispatch) => dispatch(setCharacters([]))

export function getCharactersFromAPI() {
  return async (dispatch) => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const {
      data: { results },
    } = response;
    dispatch(setCharacters(results));
  };
}
//