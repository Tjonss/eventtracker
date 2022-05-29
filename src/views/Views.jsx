import { Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import EventsView from './EventsView'
import CreateView from './CreateView'
import ProfileView from './ProfileView'
import EventDetailsViews from './EventDetailsView'
import Register from '../components/LoginView/Register'
import Login from '../components/LoginView/Login'
import { ProtectedRoute } from '../routes/ProtectedRoute'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomeView /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />

      <Route path='/events' element={ 
        <ProtectedRoute>
          <EventsView /> 
        </ProtectedRoute>
      } />
      <Route path='/events/:id' element={ 
        <ProtectedRoute>
          <EventDetailsViews />
        </ProtectedRoute>
      } />
      <Route path='/create' element={ 
        <ProtectedRoute>
          <CreateView />
        </ProtectedRoute> } />
      <Route path='/profile' element={ 
        <ProtectedRoute>
          <ProfileView />
        </ProtectedRoute> }  />
    </Routes>
  )
}

export default Views