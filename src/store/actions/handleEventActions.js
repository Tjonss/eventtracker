import actiontypes from '../actiontypes';
import axios from 'axios';

export const createNewEvent = (payload, token) => {
  return async dispatch => {
    dispatch(createEvent(true))
    try {
      const res = await axios.post('http://localhost:8080/events', payload, {
        headers: {
          'Authorization': 'Bearer' + token
        }
      })
      if(res.status === 201) {
        dispatch(createEventSuccess(res.data))

      }
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

const createEventSuccess = (payload) => {
  return {
    type: actiontypes().handleEvent.createEventSuccess,
    payload
  }
}

const createEventFailure = (err) => {
  return {
    type: actiontypes().handleEvent.createEventFailure,
    payload: err
  }
}
