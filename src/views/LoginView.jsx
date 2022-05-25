import React from 'react'
import Login from '../components/LoginView/Login'
import Register from '../components/LoginView/Register'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const LoginView = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()
  const user = useSelector(state => state.auth.token)

  useEffect(() => {
    if(user) {
      navigate('/events')
    } 
  }, [user, navigate])
  
  //aefdsagadgdsnjg ähr är duddkm
  return (
    <>
      { loggedIn 
        ? <Login setLoggedIn={setLoggedIn}/> 
        : <Register setLoggedIn={setLoggedIn} /> }
    </>
    
  )
}

export default LoginView