import { combineReducers } from "redux";
import eventsReducer from './eventsReducer';
import eventReducer from './eventReducer';
import handleEventReducer from './handleEventReducer';
import authReducer from './authReducer';

export default combineReducers({
  events: eventsReducer,
  singleEvent: eventReducer,
  handleEvent: handleEventReducer,
  auth: authReducer
})