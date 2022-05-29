import React from 'react'
import EventsList from '../components/EventView/EventsList'
import { useSelector } from 'react-redux'
import {useState, useEffect} from 'react'

const EventsView = () => {

  const { data: events } = useSelector(state => state.events)

  const [showUpcoming, setShowUpcoming] = useState([])

  useEffect(() => {
    
    setShowUpcoming(events.filter(event => Date.parse(event.timestamps) > Date.now()))

  }, [events])

  return (
    
      <div className="container">
          <div className='text-center my-3 custom-border w-100 mx-auto'>
            <span className='text-uppercase h4'>Upcoming events</span>
          </div>
          {!showUpcoming.length && (
            <div className="text-center">
              <p className='fs-5'>No upcoming events to show</p>
            </div>
          )}
        <div className="example-1 w-100 mx-auto scrollbar-cyan">
            <EventsList />
        </div>
      </div>
  )
}

export default EventsView