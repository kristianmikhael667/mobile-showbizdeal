import {GET_MARKET_PLACE} from '../../actions/MarketPlace';

const initialState = {
  getdataMarketPlaceLoading: false,
  getdataMarketPlaceResult: false,
  getdataMarketPlaceError: false,
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
    default:
      return state;
  }
}
