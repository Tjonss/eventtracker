import axios from 'axios';
import actiontypes from '../actiontypes';

export const getOneEvent = (id) => {
  return async dispatch => {
    dispatch(getSingleEvent(true))
    try {
      const res = await axios.get('http://localhost:8080/events/' + id)
      dispatch(getSingleEventSuccess(res.data))
    } catch (err) {
      dispatch(getSingleEventFailure(err.message))
    }
  }
}

const getSingleEvent = (payload) => {
  return {
    type: actiontypes().singleEvent.getSingleEvent,
    payload
  }
}

const getSingleEventSuccess = (event) => {
  return {
    type: actiontypes().singleEvent.getSingleEventSuccess,
    payload: event
  }
}

const getSingleEventFailure = (payload) => {
  return {
    type: actiontypes().singleEvent.getSingleEventFailure,
    payload
  }
}