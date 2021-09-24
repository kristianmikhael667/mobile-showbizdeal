import {
  GET_MARKET_PLACE,
  GET_CATEGORY,
  GET_MARKET_INFLUENCER,
  GET_MANAGEMENT_PROFILE,
  GET_PORTOPOLIO,
  GET_MANAGEMENT,
  GET_RATING,
  // GET_RATINGS,
} from '../../actions/MarketPlace';

const initialState = {
  // Performer
  getdataMarketPlaceLoading: false,
  getdataMarketPlaceResult: false,
  getdataMarketPlaceError: false,

  // Influencer
  getInfluencerLoading: false,
  getInfluencerResult: false,
  getInfluencerError: false,
  getInfluencerLoadingData: false,
  // Category
  getCategoryLoading: false,
  getCategoryResult: false,
  getCategoryError: false,

  // DetailMarket
  getManajementProfileLoading: false,
  getManajementProfileResult: false,
  getManajementProfileError: false,

  // PORTOFOLIO
  getPortofolioLoading: false,
  getPortofolioResult: false,
  getPortofolioError: false,

  // MANAJEMENTPROFILE
  getManajementLoading: false,
  getManajementResult: false,
  getManajementError: false,

  // RATING
  getRatingLoading: false,
  getRatingResult: false,
  getRatingError: false,

  // RATING
  // getRatingsLoading: false,
  // getRatingsResult: false,
  // getRatingsError: false,
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

    case GET_MARKET_INFLUENCER:
      return {
        ...state,
        getInfluencerLoading: action.payload.loading,
        getInfluencerLoadingData: action.payload.data,
        getInfluencerResult: action.payload.data,
        getInfluencerError: action.payload.errorMessage,
      };
    case GET_CATEGORY:
      return {
        ...state,
        getCategoryLoading: action.payload.loading,
        getCategoryResult: action.payload.data,
        getCategoryError: action.payload.errorMessage,
      };
    case GET_MANAGEMENT_PROFILE:
      return {
        ...state,
        getManajementProfileLoading: action.payload.loading,
        getManajementProfileResult: action.payload.data,
        getManajementProfileError: action.payload.errorMessage,
      };
    case GET_PORTOPOLIO:
      return {
        ...state,
        getPortofolioLoading: action.payload.loading,
        getPortofolioResult: action.payload.data,
        getPortofolioError: action.payload.errorMessage,
      };
    case GET_MANAGEMENT:
      return {
        ...state,
        getManajementLoading: action.payload.loading,
        getManajementResult: action.payload.data,
        getManajementError: action.payload.errorMessage,
      };
    case GET_RATING:
      return {
        ...state,
        getRatingLoading: action.payload.loading,
        getRatingResult: action.payload.data,
        getRatingError: action.payload.errorMessage,
      };
    // case GET_RATINGS:
    //   return {
    //     ...state,
    //     getRatingsLoading: action.payload.loading,
    //     getRatingsResult: action.payload.data,
    //     getRatingsError: action.payload.errorMessage,
    //   };
    default:
      return state;
  }
}
