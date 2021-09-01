import {combineReducers} from 'redux';
import MarketPlaceReducer from './marketplace';
import RegisterPersonalReducer from './register';

const rootReducer = combineReducers({
  MarketPlaceReducer,
  RegisterPersonalReducer,
});

export default rootReducer;
