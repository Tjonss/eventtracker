import axios from 'axios';
import actiontypes from '../actiontypes';
import jwt_decode from 'jwt-decode'


export const registerUser = user => {
  return dispatch => {
    dispatch(loading())
    axios.post('http://localhost:8080/register', user)
      .then(res => {
        if(res.status === 201) {
          dispatch(authSuccess(res.data.accessToken, res.data.user.id))
        }
      })
      .catch(err => {
        dispatch(authFailure(err.message))
      })
  }
}
export const loginUser = user => {
  return dispatch => {
    dispatch(loading())
    axios.post('http://localhost:8080/login', user)
      .then(res => {
        if(res.status === 200)
        dispatch(authSuccess(res.data.accessToken, res.data.user.id))
      })
      .catch(err => {
        dispatch(authFailure(err.message))
      })
  }
}

export const checkUser = () => {
  return dispatch => {
    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')
    if(token) {
      if(jwt_decode(token).exp * 1000 > Date.now()) {
        dispatch(authSuccess(token, userId))
      }
      else {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        dispatch(logout())
      }
    }
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout,
  }
}

const loading = () => {
  return {
    type: actiontypes().auth.loading,
  }
}

const authSuccess = (token, userId) => {
  return {
    type: actiontypes().auth.authSuccess,
    payload: token,
    userId: userId
  }
}

const authFailure = (err) => {
  return {
    type: actiontypes().auth.authFailure,
    payload: err
  }
}