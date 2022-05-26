import actiontypes from '../actiontypes';
import axios from 'axios';

export const getEvents = (userId) => {
  return async dispatch => {
    dispatch(setEvents(true))
    try {
      let token = localStorage.getItem('token')
      const res = await axios.get('http://localhost:8080/events?_sort=timestamps&userId=' + userId, {
        headers: {
          'Authorization': 'Bearer' + token
        }
      })
      dispatch(getEventsSuccess(res.data))
    } catch (err) { 
      dispatch(getEventsFailure(err.message))
    }
  }
}

export const clearEvents = () => {
  return {
    type: actiontypes().events.clearEvents,
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

