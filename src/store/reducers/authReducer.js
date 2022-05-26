import actiontypes from '../actiontypes';

const initState = {
  token: null,
  loading: false,
  error: null,
  userId: null
}

const authReducer = (state = initState, action) => {

  switch(action.type) {
    
    case actiontypes().auth.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.authSuccess:
      localStorage.setItem('token', action.payload)
      localStorage.setItem('userId', action.userId)
      return {
        ...state,
        token: action.payload,
        userId: action.userId,
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
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      return {
        ...initState,
      }

    default: 
      return state
  }

}

export default authReducer