import '../App.css'
import { useSelector } from 'react-redux'
import ProfileCard from '../components/ProfileView/ProfileCard'
import Loading from '../components/Loader/Loading'
import { useEffect, useState } from 'react'

const ProfileView = () => {

  const { data: events, loading } = useSelector(state => state.events)

  
  const [pastEvents, setPastEvents] = useState([])
  const [showUpcoming, setShowUpcoming] = useState([])

  const [showHistory, setShowHistory] = useState(false)

  useEffect(() => {
    
    setPastEvents(events.filter(event => Date.parse(event.timestamps) < Date.now()))
    setShowUpcoming(events.filter(event => Date.parse(event.timestamps) > Date.now()))
    
  }, [events])

  return (
    <>
      <div className='container Profile'>
        <div className='text-center my-3 custom-border w-100 mx-auto'>
          <span className='text-uppercase h4'>Profile</span>
        </div>
        <div className="d-flex justify-content-around mb-2 mx-auto ">
          <span onClick={() => setShowHistory(false)} className="col-5 col-sm-5 btn btn-clr btn-sm" type="button">Upcoming</span>
          <span onClick={() => setShowHistory(true)} className="col-5 col-sm-5 btn btn-clr btn-sm" type="button">History</span>
        </div>
        { loading && <Loading /> }
       
        <div className="example-2 w-100 mx-auto scrollbar-cyan thin pe-1">
        { showHistory 
          ? pastEvents.map(event => <ProfileCard key={event.id} event={event}/>) 
          : showUpcoming.map(event => <ProfileCard key={event.id} event={event}/>) 
        } 
        </div>
      
       
      </div>    
     </>
  )
}

export default ProfileView