import actiontypes from '../actiontypes';

const initState = {
  data: [],
  loading: false,
  error: null,
}

const handleEventReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().handleEvent.createEvent: 
    return {
      ...state,
      data: [],
      loading: true,
      error: null
    }

    case actiontypes().handleEvent.createEventSuccess: 
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null
      }
    
    case actiontypes().handleEvent.createEventFailure: 
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}


export default handleEventReducer