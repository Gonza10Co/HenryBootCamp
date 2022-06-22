import {
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
} from "../actions/action-types";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: undefined,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [...state.moviesFavourites, payload],
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(({ imdbID }) => imdbID!==payload),
      };
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: payload.Search,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
