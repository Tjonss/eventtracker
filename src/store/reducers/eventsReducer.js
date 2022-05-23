import actiontypes from '../actiontypes';

const initState = {
  data: [],
  loading: false,
  error: null
}

const eventsReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().events.getEvents: 
      return {
        ...state,
        loading: true,
        error: null
      }
    
    case actiontypes().events.getEventsSuccess: 
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }
    
    case actiontypes().events.getEventsFailure: 
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      }

    case actiontypes().events.sortEvents:

      state.events = state.events.sort((a, b) => {
        let c = new Date(a.date)
        let d = new Date(b.date)
        return c-d
      })

      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }
    
    default:
      return state
    }
  }



export default eventsReducer