import {
  HOME_LOADING,
  ARTISTS_LOADED_FAILED,
  ARTISTS_LOADED_SUCCESS,
} from './const';

const getArtistsSuccess = artists => ({
  type: ARTISTS_LOADED_SUCCESS,
  artists,
});

const getArtistsFailed = error => ({
  type: ARTISTS_LOADED_FAILED,
  error,
});

const getArtists = (dispatch) => {
  fetch('http://localhost:3004/artists')
    .then(response => response.json())
    .then((artists) => {
      dispatch(getArtistsSuccess(artists));
    }).catch((error) => {
      dispatch(getArtistsFailed(error));
    });
  return {
    type: HOME_LOADING,
  };
};

export {
  getArtists
};
