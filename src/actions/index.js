import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_DATA = 'FETCHING_DATA';
export const LOADED_SUCCESSFULLY = 'LOADED_SUCCESSFULLY';
export const FAILED_TO_LOAD = 'FAILED_TO_LOAD';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

const url = 'https://swapi.co/api/people/';

export const fetchStarWarsData = () => dispatch => {
  dispatch(fetchingData(true));
  axios.get(url)
    .then(resp => {
      dispatch(loadedDataSuccessfully(resp.data.results))
    })
    .catch(err => dispatch(failedToLoadData(err)))
    .finally(dispatch(fetchingData(false)));

}

export const fetchingData = (bool) => {
  return ({
    type: FETCHING_DATA,
    payload: bool
  });
}

export const loadedDataSuccessfully = (data) => {
  return ({
    type: LOADED_SUCCESSFULLY,
    payload: data
  });
}

export const failedToLoadData = (data) => {
  return ({
    type: FAILED_TO_LOAD,
    payload: data
  });
}
