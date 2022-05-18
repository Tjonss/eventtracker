const actiontypes = () => {
  return {
    events: {
      getEvents: 'GET_EVENTS',
      eventsSuccess: 'GET_EVENTS_SUCCESS',
      eventsFailure: 'GET_EVENTS_FAILURE'
    },
    singleEvent: {
      addEvent: 'ADD_EVENT',
      deleteEvent: 'DELETE_EVENT',
      completedEvent: 'COMPLETED_EVENT'
    },
    auth: {
      loading: 'AUTH_LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
    }
    
  }
}



export default actiontypes