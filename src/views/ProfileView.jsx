import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/authActions'
import ProfileCard from '../components/ProfileView/ProfileCard'
import Loading from '../components/Loader/Loading'

const ProfileView = () => {

  const dispatch = useDispatch()

  const { data: events, loading } = useSelector(state => state.events)


  return (
    <>
      <div className='container Profile'>
        <div className='text-center my-3 custom-border w-100 mx-auto'>
          <span className='text-uppercase h4'>PROFILE</span>
        </div>
        <div className="d-flex justify-content-around mb-2 mx-auto ">
          <span className="col-5 col-sm-5 btn btn-clr btn-sm" type="button">Upcoming</span>
          <span className="col-5 col-sm-5 btn btn-clr btn-sm" type="button">History</span>
        </div>
        { loading && <Loading /> }
      { 
        <div className="example-2 w-100 mx-auto scrollbar-cyan thin pe-1">
          { events.map(event => <ProfileCard key={event.id} event={event}/>) }
        </div>
      }
        <div className="d-grid mt-3 mx-auto mt-md-4 col-11 col-md-10 ">
          {/* <button onClick={() => dispatch(logout())} className='btn btn-sm rounded w-100 mx-auto btn-clr'>LOGOUT</button> */}
        </div>
      </div>     
     </>
  )
}

export default ProfileView