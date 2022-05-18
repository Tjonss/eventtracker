import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
  return (
    <div className="Event-card card mb-2 position-relative">
      <div className="card-header py-1 px-2 d-flex justify-content-between align-items-center">
        <span className="fs-5">{event.title}</span>
        <div>
          <span>2022-05-06</span>
          <span className='mx-2'>-</span>
          <span>10:34</span>
        </div>
      </div>
      <div className='position-relative'>
        <Link to='/events/:id' className="card-body pt-2 px-2 d-flex justify-content-between">
          <span className="card-text w-75 fst-italic">{event.desc.slice(0, 100)}...</span>
        </Link>
        <div className='d-flex justify-content-center flex-column'>
          <button className='btn btn-clr py-0 px-2 position-absolute m-3 end-0 bottom-0'><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    </div>
  )
}

export default EventCard