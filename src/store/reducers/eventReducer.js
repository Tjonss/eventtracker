import actiontypes from '../actiontypes';

const initState = {
  data: null,
  loading: false,
  error: null
}

const eventReducer = (state = initState, action) => {

  switch(action.type) {

    case actiontypes().singleEvent.getSingleEvent: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null
      }
    }

    case actiontypes().singleEvent.getSingleEventSuccess: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }
    }

    case actiontypes().singleEvent.getSingleEventFailure: {
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      }
    }
    
    default:
      return state
  }
}

export default eventReducer