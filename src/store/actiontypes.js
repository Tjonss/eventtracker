const actiontypes = () => {
  return {
    events: {
      getEvents: 'GET_EVENTS',
      clearEvents: 'CLEAR_EVENTS',
      getEventsSuccess: 'GET_EVENTS_SUCCESS',
      getEventsFailure: 'GET_EVENTS_FAILURE'
    },
    singleEvent: {
      getSingleEvent: 'GET_SINGLE_EVENT',
      getSingleEventSuccess: 'GET_SINGLE_EVENT_SUCCESS',
      getSingleEventFailure: 'GET_SINGLE_EVENT_FAILURE'
    },
    handleEvent: {
      createEvent: 'CREATE_EVENT',
      createEventSuccess: 'CREATE_EVENT_SUCCESS',
      createEventFailure: 'CREATE_EVENT_FAILURE',
    },
    auth: {
      loading: 'AUTH_LOADING',
      authSuccess: 'AUTH_SUCCESS',
      authFailure: 'AUTH_FAILURE',
      logout: 'USER_LOGOUT'
    }
  }
}

export default actiontypes