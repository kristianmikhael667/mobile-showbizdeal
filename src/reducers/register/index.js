import {REGISTER_PERSONAL} from '../../actions/RegisterPersonal';

const initialState = {
  // Performer
  postRegistPersonealLoading: false,
  postRegistPersonealResult: false,
  postRegistPersonealError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_PERSONAL:
      return {
        ...state,
        postRegistPersonealLoading: action.payload.loading,
        postRegistPersonealResult: action.payload.data,
        postRegistPersonealError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
