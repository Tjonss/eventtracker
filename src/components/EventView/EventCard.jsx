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
          <button className='btn btn-clr delete-btn'><i className="fa-solid fa-trash-can fs-6"></i></button>
      </div>
      <Link to={`/events/${event.id}`} className='event-body'>
        <div className="card-body py-2 ps-2">
          <span className="card-text w-75 fst-italic">{event.desc.slice(0, 55)}...</span>
        </div>
      </Link>
    </div>
  )
}

export default EventCard