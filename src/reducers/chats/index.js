import {LIST_CHAT} from '../../actions/ChatListAction';

const initialState = {
  getListChatLoading: false,
  getListChatResult: false,
  getListChatError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_CHAT:
      return {
        ...state,
        getListChatLoading: action.payload.loading,
        getListChatResult: action.payload.data,
        getListChatError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
