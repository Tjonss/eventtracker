import actiontypes from '../actiontypes';

const initState = {
  data: [],
  loading: false,
  error: null
}

const handleEventReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().handleEvent.createEvent: 
    return {
      data: null,
      loading: true,
      error: action.payload
    }

    case actiontypes().handleEvent.handleEventSuccess: 
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null
      }
    
    case actiontypes().handleEvent.handleEventFailure: 
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}


export default handleEventReducer