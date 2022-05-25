import actiontypes from '../actiontypes';
import axios from 'axios';

export const createNewEvent = (event) => {
  return async dispatch => {
    dispatch(createEvent(true))
    try {
      const res = await axios.post('http://localhost:8080/events', event)
      dispatch(createEventSuccess(res.data))
    } catch (err) {
      dispatch(createEventFailure(err.message))
    }
  }
}


const createEvent = (payload) => {
  return {
    type: actiontypes().handleEvent.createEvent,
    payload
  }
}

const createEventSuccess = (event) => {
  return {
    type: actiontypes().handleEvent.createEventSuccess,
    payload: event
  }
}

const createEventFailure = (err) => {
  return {
    type: actiontypes().handleEvent.createEventFailure,
    payload: err
  }
}
