import {
  ARTIST_LOADING,
  ARTIST_LOADED_FAILED,
  ARTIST_LOADED_SUCCESS,
} from './const';

const initialState = {
  loading: false,
  selectedArtist: {},
  error: '',
};

function artist(state = initialState, { type, artist: selectedArtist, error }) {
  switch (type) {
    case ARTIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ARTIST_LOADED_SUCCESS:
      return {
        ...state,
        selectedArtist,
        loading: false,
      };
    case ARTIST_LOADED_FAILED:
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
}

export default artist;
