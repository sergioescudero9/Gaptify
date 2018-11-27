import {
  ARTIST_LOADING,
  ARTIST_LOADED_FAILED,
  ARTIST_LOADED_SUCCESS,
} from './const';

const getArtistsSuccess = artist => ({
  type: ARTIST_LOADED_SUCCESS,
  artist,
});

const getArtistsFailed = error => ({
  type: ARTIST_LOADED_FAILED,
  error,
});

const getArtist = (dispatch, id) => {
  fetch(`http://localhost:3004/artists?id=${id}`)
    .then(response => response.json())
    .then(([artist]) => {
      dispatch(getArtistsSuccess(artist));
    }).catch((error) => {
      dispatch(getArtistsFailed(error));
    });
  return {
    type: ARTIST_LOADING,
  };
};

export {
  getArtist
};
