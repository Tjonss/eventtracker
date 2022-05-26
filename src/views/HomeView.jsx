import React from 'react'
import Login from '../components/LoginView/Login'
import Register from '../components/LoginView/Register'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


const HomeView = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()
  const user = useSelector(state => state.auth.token)

  useEffect(() => {
    if(user) {
      navigate('/profile')
    } 
  }, [user, navigate])
  
  return (
    <>
      { loggedIn 
        ? <Login setLoggedIn={setLoggedIn}/> 
        : <Register setLoggedIn={setLoggedIn} /> }
    </>
    
  )
}

export default HomeView