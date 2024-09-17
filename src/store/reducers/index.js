import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
});

export default rootReducer;