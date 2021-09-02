import {combineReducers} from 'redux';
import MarketPlaceReducer from './marketplace';
import RegisterPersonalReducer from './register';
import LoginPersonalReducer from './login';

const rootReducer = combineReducers({
  MarketPlaceReducer,
  RegisterPersonalReducer,
  LoginPersonalReducer,
});

export default rootReducer;
