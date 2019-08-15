import {
  FETCH_BREWERY_DATA_START,
  FETCH_BREWERY_DATA_SUCCESS,
  FETCH_BREWERY_DATA_FAILURE
} from "../actions";

const initialState = {
  breweries: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREWERY_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_BREWERY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        breweries: action.payload,
        error: ""
      };
    case FETCH_BREWERY_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "No beer for you"
      };
    default:
      return state;
  }
};
