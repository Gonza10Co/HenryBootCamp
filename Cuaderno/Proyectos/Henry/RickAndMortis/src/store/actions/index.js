import axios from "axios";

export const SET_CHARACTERS = "characters/set";
export const SET_APP_LOADING = "app/loading/set";

export const getCharactersFromApi = () => {
  return (dispatch) => {
    dispatch(setAppLoading(true));
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        const {
          data: { results },
        } = response;
        dispatch({ type: SET_CHARACTERS, payload: results });
        dispatch(setAppLoading(false))
      });
  };
};

export const clearCharacters = () => {
  return (dispatch) => {
    dispatch({ type: SET_CHARACTERS, payload: [] });
  };
};

export const setAppLoading = (payload) => {
  return {
    type: SET_APP_LOADING,
    payload,
  };
};
