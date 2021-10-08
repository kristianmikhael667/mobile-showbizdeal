import {combineReducers} from 'redux';
import MarketPlaceReducer from './marketplace';
import RegisterPersonalReducer from './register';
import LoginPersonalReducer from './login';
import ShowbizliveReducer from './showbizlive';
import MyTalentReducer from './mytalent';
import SearchNameReducer from './searching';
import ChatslistReducer from './chats';
import TransactionReducer from './transaction';

const rootReducer = combineReducers({
  MarketPlaceReducer,
  RegisterPersonalReducer,
  LoginPersonalReducer,
  ShowbizliveReducer,
  MyTalentReducer,
  SearchNameReducer,
  ChatslistReducer,
  TransactionReducer,
});

export default rootReducer;
