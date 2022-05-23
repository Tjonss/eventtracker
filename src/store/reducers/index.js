import { combineReducers } from "redux";
import eventsReducer from './eventsReducer';
import eventReducer from './eventReducer';
import handleEventReducer from './handleEventReducer';

export default combineReducers({
  events: eventsReducer,
  singleEvent: eventReducer,
  handleEvent: handleEventReducer
})