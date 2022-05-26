import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../store/actions/eventsAction'
import EventCard from './EventCard'
import './Events.css'
import '../../App.css'
import Loading from '../Loader/Loading'
import { clearEvents } from '../../store/actions/eventsAction'

const EventsList = () => {
  
  const dispatch = useDispatch()
  const { data: events, loading, error } = useSelector(state => state.events)

  const userId  = useSelector(state => state.auth.userId)

  useEffect(() => {
    
    dispatch(getEvents(userId))

    return () => {
      dispatch(clearEvents())
    }
  }, [dispatch])

  return (
    
    <div className="Events rounded pe-1 Event-card event-scrollbar mx-auto scrollbar-cyan thin mb-1">
      { loading && <Loading /> }
      { events.map(event => <EventCard key={event.id} event={event} /> )}
    </div>
  )
}

export default EventsList