import {combineReducers} from 'redux';
import MarketPlaceReducer from './marketplace';
import RegisterPersonalReducer from './register';
import LoginPersonalReducer from './login';
import ShowbizliveReducer from './showbizlive';

const rootReducer = combineReducers({
  MarketPlaceReducer,
  RegisterPersonalReducer,
  LoginPersonalReducer,
  ShowbizliveReducer,
});

export default rootReducer;
