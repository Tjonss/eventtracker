const actiontypes = () => {
  return {
    events: {
      getEvents: 'GET_EVENTS',
      deleteEvent: 'DELETE_EVENT',
      sortEvents: 'SORT_EVENTS',
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
      handleEventSuccess: 'HANDLE_EVENT_SUCCESS',
      handleEventFailure: 'HANDLE_EVENT_FAILURE',
    },
    auth: {
      loading: 'AUTH_LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
    }
  }
}

export default actiontypes