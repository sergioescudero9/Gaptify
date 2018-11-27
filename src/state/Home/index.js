import {
  HOME_LOADING,
  ARTISTS_LOADED_FAILED,
  ARTISTS_LOADED_SUCCESS,
} from './const';

const initialState = {
  loading: false,
  artists: [],
  error: '',
};

function home(state = initialState, { type, artists, error }) {
  switch (type) {
    case HOME_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ARTISTS_LOADED_SUCCESS:
      return {
        ...state,
        artists,
        loading: false,
      };
    case ARTISTS_LOADED_FAILED:
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
}

export default home;
