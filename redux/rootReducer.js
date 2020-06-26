import {combineReducers} from 'redux';
import userReducer from './userSlice';
import roomsSlice from './roomsSlice';

export default combineReducers({
    userReducer,
    roomsSlice
});
