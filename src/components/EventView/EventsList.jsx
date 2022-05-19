import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../store/actions/eventsAction'
import EventCard from './EventCard'
import './Events.css'
import '../../App.css'

const EventsList = () => {
  
  const dispatch = useDispatch()
  const { data: events, loading, error } = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <>
      <div className="container">
        <div className='text-center my-3 custom-border w-100 mx-auto'>
          <span className='text-uppercase h4'>my events</span>
        </div>
      </div>
      <div className="Events rounded pe-1 example-1 scrollbar-cyan">
          { loading && <p>loading...</p> }
          { events.map(event => <EventCard key={event.id} event={event} /> )}
      </div>
    </>
  )
}

export default EventsList