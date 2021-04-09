import {fetchCountries} from '../../api/index';
import {fetchRegions} from '../../api/index';
import {fetchCities} from '../../api/index';

//Config
export const config = [
  {key: 'code', argName: 'country', title: 'Country', getData: fetchCountries},
  {key: 'isoCode', argName: 'region', title: 'Region', getData: fetchRegions},
  {key: 'id', argName: 'city', title: 'City', getData: fetchCities},
];

//Types
const FETCH_START = 'fetch-start';
const FETCH_SUCCESS = 'fetch-success';
const FETCH_ERROR = 'fetch-error';

//Index
const PREVIOUS = 'previous';
const NEXT = 'next';

//defaults
const dataInitialState = {
  data: [],
  fetched: false,
  fetching: false,
  index: 0,
  args: [],
};

//Action creators
const startFetch = () => ({type: FETCH_START});
const successFetch = payload => ({type: FETCH_SUCCESS, payload});
const errorFetch = error => ({type: FETCH_ERROR, error});

//
export const nextNode = args => ({type: NEXT, args});
export const previousNode = () => ({type: PREVIOUS});

export default (state = dataInitialState, action) => {
  // console.log(action.type);
  // console.log(action.args);
  // console.log(state.index);

  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
      };

    case FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };

    case PREVIOUS:
      return {
        ...state,
        index: state.index - 1,
      };

    case NEXT:
      return {
        ...state,
        index: state.index + 1,
        args: action.args,
      };

    default:
      return state;
  }
};

//Thunk
export const getData = state => async dispatch => {
  dispatch(startFetch());
  try {
    const currentData = state.data;
    const index = state.index;

    const args = state.args;
    const data = await config[index].getData(args);
    currentData[index] = data;

    //const data = await fetchCountries()
    dispatch(successFetch(currentData));
  } catch (e) {
    dispatch(errorFetch(e));
  }
};
