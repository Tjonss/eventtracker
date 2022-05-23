import React from 'react'
import EventsList from '../components/EventView/EventsList'

const EventsView = () => {
  return (
      <div className="container">
          <div className='text-center my-3 custom-border w-100 mx-auto'>
            <span className='text-uppercase h4'>my events</span>
          </div>
        <div className="example-1 w-100 mx-auto scrollbar-cyan">
            <EventsList />
        </div>
      </div>
    
  )
}

export default EventsView