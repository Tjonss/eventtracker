import actiontypes from '../actiontypes';
import axios from 'axios';

export const getEvents = () => {
  return async dispatch => {
    dispatch(setEvents(true))
    try {
      const res = await axios.get('http://localhost:8080/events')
      dispatch(eventsSuccess(res.data))
    } catch (err) { 
      dispatch(eventsFailure(err.message))
    }
  }
}

const setEvents = payload => {
  return {
    type: actiontypes().events.getEvents,
    payload
  }
}

const eventsSuccess = events => {
  return {
    type: actiontypes().events.eventsSuccess,
    payload: events
  }
}

const eventsFailure = err => {
  return {
    type: actiontypes().events.eventsFailure,
    payload: err
  }
}