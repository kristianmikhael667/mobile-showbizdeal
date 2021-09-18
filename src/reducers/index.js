import {combineReducers} from 'redux';
import MarketPlaceReducer from './marketplace';
import RegisterPersonalReducer from './register';
import LoginPersonalReducer from './login';
import ShowbizliveReducer from './showbizlive';
import MyTalentReducer from './mytalent';
import SearchNameReducer from './searching';

const rootReducer = combineReducers({
  MarketPlaceReducer,
  RegisterPersonalReducer,
  LoginPersonalReducer,
  ShowbizliveReducer,
  MyTalentReducer,
  SearchNameReducer,
});

export default rootReducer;
