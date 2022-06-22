import {
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
} from "./action-types";

const API_KEY = "e339fd3e";

export const addMovieFavorite = (movie) => ({
  type: ADD_MOVIE_FAVORITE,
  payload: movie,
});

export const removeMovieFavorite = (id) => ({
  type: REMOVE_MOVIE_FAVORITE,
  payload: id,
});

export const getMovies = (titulo) => {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIES, payload: json });
  };
};

export const getMovieDetail = (id) => {
  return async function (dispatch) {
    if (id) {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );

        const json = await response.json();
        if (json.Response === "False") {
          dispatch({ type: GET_MOVIE_DETAIL, payload: null });
        } else {
          dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        }
      } catch {
        dispatch({ type: GET_MOVIE_DETAIL, payload: null });
      }
    } else {
      dispatch({ type: GET_MOVIE_DETAIL });
    }
  };
};
