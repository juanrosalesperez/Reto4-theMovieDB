import { CONSTANTS } from "../actions";

const initialState = {
  text: "",
  movies: [],
  movie: {
    genres: [
      {
        id: "",
        text: "",
      },
    ],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.SEARCH_MOVIE: {
      const newState = {
        ...state,
        text: action.payload,
      };
      return newState;
    }
    case CONSTANTS.FETCH_MOVIES: {
      const newState = {
        ...state,
        movies: action.payload,
      };
      return newState;
    }
    case CONSTANTS.FETCH_MOVIE: {
      const newState = {
        ...state,
        movie: action.payload,
      };
      return newState;
    }

    default:
      return state;
  }
}
