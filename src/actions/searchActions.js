import { CONSTANTS } from ".";
import axios from "axios";

import { APIKey } from "../APIKey";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: CONSTANTS.SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=es-ES&query=${text}&page=1&include_adult=false`
    )
    .then((response) =>
      dispatch({
        type: CONSTANTS.FETCH_MOVIES,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=es-ES`
    )
    .then((response) =>
      dispatch({
        type: CONSTANTS.FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};
