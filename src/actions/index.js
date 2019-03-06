import axios from 'axios'
// we'll need axios
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const IS_FETCHING = 'IS_FETCHING';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR'

export const requestData = () => dispatch => {
    dispatch({
        type: IS_FETCHING
    })
    axios
    .get('https://swapi.co/api/people')
    .then(res => {
        console.log(res)
        dispatch({
            type: REQUEST_SUCCESS,
            payload: res.data.results
        })
    })
    .catch(err => {
        dispatch({
            type: REQUEST_ERROR,
            payload: err
        })
    })
}
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
