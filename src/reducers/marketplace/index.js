import {GET_MARKET_PLACE, GET_CATEGORY} from '../../actions/MarketPlace';

const initialState = {
  getdataMarketPlaceLoading: false,
  getdataMarketPlaceResult: false,
  getdataMarketPlaceError: false,

  getCategoryLoading: false,
  getCategoryResult: false,
  getCategoryError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MARKET_PLACE:
      return {
        ...state,
        getdataMarketPlaceLoading: action.payload.loading,
        getdataMarketPlaceResult: action.payload.data,
        getdataMarketPlaceError: action.payload.errorMessage,
      };
    case GET_CATEGORY:
      return {
        ...state,
        getCategoryLoading: action.payload.loading,
        getCategoryResult: action.payload.data,
        getCategoryError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
