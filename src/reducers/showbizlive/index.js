import {GET_LIST_SHOWLIVE} from '../../actions/Showbizlive';

const initialState = {
  // Showbizlive
  getlistShowLiveLoading: false,
  getlistShowLiveResult: false,
  getlistShowLiveError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_SHOWLIVE:
      return {
        ...state,
        getlistShowLiveLoading: action.payload.loading,
        getlistShowLiveResult: action.payload.data,
        getlistShowLiveError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
