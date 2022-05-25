import actiontypes from '../actiontypes';

const initState = {
  token: null,
  loading: false,
  error: null
}

const authReducer = (state = initState, action) => {

  switch(action.type) {
    
    case actiontypes().auth.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.authSuccess:
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().auth.authFailure: 
      return {
        ...state,
        token: null,
        loading: false,
        error: action.payload
      }
    
    
    case actiontypes().auth.logout:
      return {
        ...initState
      }

    default: 
      return state
  }

}

export default authReducer