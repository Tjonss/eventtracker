import actiontypes from '../actiontypes';
import axios from 'axios';

export const createNewEvent = (event) => {
  return async dispatch => {
    dispatch(createEvent(true))
    try {
      const res = await axios.post('http://localhost:8080/events', event)
      dispatch(handleEventSuccess(res.data))
    } catch (err) {
      dispatch(handleEventFailure(err.message))
    }
  }
}


const createEvent = (payload) => {
  return {
    type: actiontypes().handleEvent.createEvent,
    payload
  }
}

const handleEventSuccess = (event) => {
  return {
    type: actiontypes().handleEvent.handleEventSuccess,
    payload: event
  }
}

const handleEventFailure = (err) => {
  return {
    type: actiontypes().handleEvent.handleEventFailure,
    payload: err
  }
}