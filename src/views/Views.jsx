import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import EventsView from './EventsView'
import CreateView from './CreateView'
import ProfileView from './ProfileView'
import EventDetail from './EventDetail'
import Register from '../components/LoginView/Register'
import Login from '../components/LoginView/Login'

const Views = () => {
  return (
    <Routes>
      <Route path='/'           element={ <HomeView /> } />
      <Route path='/events'     element={ <EventsView /> } />
      <Route path='/events/:id' element={ <EventDetail /> } />
      <Route path='/create'     element={ <CreateView /> } />
      <Route path='/profile'    element={ <ProfileView /> }  />
      <Route path='/login'      element={ <Login /> } />
      <Route path='/register'   element={ <Register /> } />
    </Routes>
  )
}

export default Views