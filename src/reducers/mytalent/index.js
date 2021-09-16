import {GET_MY_TALENT} from '../../actions/MyTalentAction';

const initialState = {
  // Performer
  getMyTalentLoading: false,
  getMyTalentResult: false,
  getMyTalentError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MY_TALENT:
      return {
        ...state,
        getMyTalentLoading: action.payload.loading,
        getMyTalentResult: action.payload.data,
        getMyTalentError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
