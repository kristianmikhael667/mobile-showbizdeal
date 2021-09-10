import {GET_LIST_SHOWLIVE, LEADER_BOARD} from '../../actions/Showbizlive';

const initialState = {
  // Showbizlive
  getlistShowLiveLoading: false,
  getlistShowLiveResult: false,
  getlistShowLiveError: false,

  // live
  getshowLeaderBoardLoading: false,
  getshowLeaderBoardResult: false,
  getshowLeaderBoardError: false,
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
    case LEADER_BOARD:
      return {
        ...state,
        getshowLeaderBoardLoading: action.payload.loading,
        getshowLeaderBoardResult: action.payload.data,
        getshowLeaderBoardError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
