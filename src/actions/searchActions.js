import { CONSTANTS } from ".";
import axios from "axios";

import { APIKey } from "../APIKey";

// Creamos constante para la busqueda
export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: CONSTANTS.SEARCH_MOVIE,
    payload: text,
  });
};

// Creamos constante para llamar a la api de la busqueda
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

// Creamos constante para llamar a la api de la pelicula por ID
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

// Creamos constante para la busqueda
export const searchSerie = (text) => (dispatch) => {
  dispatch({
    type: CONSTANTS.SEARCH_SERIE,
    payload: text,
  });
};

// Creamos constante para llamar a la api de la busqueda
export const fetchSeries = (text) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${APIKey}&language=es-ES&query=${text}&page=1&include_adult=false`
    )
    .then((response) =>
      dispatch({
        type: CONSTANTS.FETCH_SERIES,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

// Creamos constante para llamar a la api de la serie por ID
export const fetchSerie = (tv_id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${APIKey}&language=es-ES`
    )
    .then((response) =>
      dispatch({
        type: CONSTANTS.FETCH_SERIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};
