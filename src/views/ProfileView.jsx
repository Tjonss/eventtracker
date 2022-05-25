import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/actions/authActions'
import ProfileCard from '../components/ProfileView/ProfileCard'
import { getEvents } from '../store/actions/eventsAction'
import {useEffect} from 'react'

const ProfileView = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { token: user } = useSelector(state => state.auth)
  const { data: events, loading } = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
  
   <>
      {loading && <p>Loading...</p>}
       <div className='container Profile'>
          <div className='text-center my-3 custom-border w-100 mx-auto'>
            <span className='text-uppercase h4'>Hello</span>
          </div>
          <div className="d-flex justify-content-around mb-2 mx-auto ">
            <button className="col-5 col-sm-5 btn btn-clr btn-sm" type="button">Upcoming</button>
            <button className="col-5 col-sm-5 btn btn-clr btn-sm" type="button">History</button>
            {/* <span className="col-5 col-sm-5 btn btn-clr btn-sm" type="button">History</span> */}

          </div>
          
        { 
          <div className="example-2 w-100 mx-auto scrollbar-cyan thin pe-1">
            { events.map(event => <ProfileCard key={event.id} event={event}/>) }
          </div>
        }
        
       
          <div className="d-grid mt-3 mt-md-4 mt-md-4 col-12 col-md-12 ">
            <button onClick={() => dispatch(logout())} className='btn btn-sm rounded w-100 mx-auto btn-clr'>LOGOUT</button>
          </div>
        </div> 
       
      
    
     </>
  )
}

export default ProfileView