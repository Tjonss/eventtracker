import axios from 'axios';
import actiontypes from '../actiontypes';


// export const registerUser = (user) => {
//   return async dispatch => {
//     dispatch(loading(true))
//     try {
//       const res = await axios.post('http://localhost:8080/register', user)
//       dispatch(authSuccess(res.data))
//     } catch (err) {
//       dispatch(authFailure(err.message))
//     }
//   }
// }
export const registerUser = user => {
  return dispatch => {
    dispatch(loading())
    axios.post('http://localhost:8080/register', user)
      .then(res => {
        if(res.status === 201) {
          dispatch(authSuccess(res.data.accessToken))
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
        dispatch(authSuccess(res.data.accessToken))
      })
  }
}



  
const loading = () => {
  return {
    type: actiontypes().auth.loading,
  }
}

const authSuccess = (token) => {
  return {
    type: actiontypes().auth.authSuccess,
    payload: token
  }
}

const authFailure = (err) => {
  return {
    type: actiontypes().auth.authFailure,
    payload: err
  }
}

export const logout = (payload) => {
  return {
    type: actiontypes().auth.logout,
    payload
  }
}