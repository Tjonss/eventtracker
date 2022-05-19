import actiontypes from '../actiontypes';
import axios from 'axios';

export const getEvents = () => {
  return async dispatch => {
    dispatch(setEvents(true))
    try {
      const res = await axios.get('http://localhost:8080/events')
      dispatch(getEventsSuccess(res.data))
    } catch (err) { 
      dispatch(getEventsFailure(err.message))
    }
  }
}

const setEvents = payload => {
  return {
    type: actiontypes().events.getEvents,
    payload
  }
}
const getEventsSuccess = events => {
  return {
    type: actiontypes().events.getEventsSuccess,
    payload: events
  }
}
const getEventsFailure = err => {
  return {
    type: actiontypes().events.getEventsFailure,
    payload: err
  }
}
