import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import EventsView from './EventsView'
import CreateView from './CreateView'
import ProfileView from './ProfileView'
import SingleEvent from './SingleEvent'
import LoginView from './LoginView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomeView /> } />
      <Route path='/events' element={ <EventsView /> } />
      <Route path='/events/:id' element={ <SingleEvent /> } />
      <Route path='/create' element={ <CreateView />} />
      <Route path='/profile' element={ <ProfileView />}  />
      <Route path='/login' element={<LoginView />} />
    </Routes>
  )
}

export default Views