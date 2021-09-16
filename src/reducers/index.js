import {combineReducers} from 'redux';
import MarketPlaceReducer from './marketplace';
import RegisterPersonalReducer from './register';
import LoginPersonalReducer from './login';
import ShowbizliveReducer from './showbizlive';
import MyTalentReducer from './mytalent';

const rootReducer = combineReducers({
  MarketPlaceReducer,
  RegisterPersonalReducer,
  LoginPersonalReducer,
  ShowbizliveReducer,
  MyTalentReducer,
});

export default rootReducer;
