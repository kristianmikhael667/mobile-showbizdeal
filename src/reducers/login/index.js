import {LOGIN_PERSONAL} from '../../actions/LoginAction';

const initialState = {
  loginLoading: false,
  loginResult: false,
  loginError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_PERSONAL:
      // console.log(action);

      return {
        ...state,
        loginLoading: action.payload.loading,
        loginResult: action.payload.data,
        loginError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
