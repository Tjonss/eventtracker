import React from 'react'
import EventsList from '../components/EventView/EventsList'

const EventsView = () => {
  return (
    <>
      <div className='container'>
        <div className='text-center mt-2 custom-border w-75 mx-auto'>
          <span className='text-uppercase h4'>my events</span>
        </div>
          <EventsList />
      </div>
    </>
    
    
  )
}

export default EventsView