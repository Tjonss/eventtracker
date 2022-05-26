import './Events.css'
import '../../App.css'
import EventCard from './EventCard'
import Loading from '../Loader/Loading'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../store/actions/eventsAction'

const EventsList = () => {
  
  const dispatch = useDispatch()
  const { data: events, loading } = useSelector(state => state.events)

  const userId  = useSelector(state => state.auth.userId)

  const [showUpcoming, setShowUpcoming] = useState([])

  useEffect(() => {
    dispatch(getEvents(userId))

  
  }, [dispatch, userId])

  useEffect(() => {
    
    setShowUpcoming(events.filter(event => Date.parse(event.timestamps) > Date.now()))

  }, [events])


  return (
      <div className="Events rounded pe-1 Event-card event-scrollbar mx-auto scrollbar-cyan thin mb-1">
        { loading && <Loading /> }
        { showUpcoming.map(event => <EventCard key={event.id} event={event}   /> )}
      </div>
  )
}

export default EventsList