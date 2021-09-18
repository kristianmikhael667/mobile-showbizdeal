import {SEARCH_NAME} from '../../actions/ResultSearch';

const initialState = {
  // Showbizlive
  getSearchByNameLoading: false,
  getSearchByNameResult: false,
  getSearchByNameError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_NAME:
      return {
        ...state,
        getSearchByNameLoading: action.payload.loading,
        getSearchByNameResult: action.payload.data,
        getSearchByNameError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
