import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {


  return (
    <div className="Event-card event-scrollbar mx-auto scrollbar-cyan thin mb-1">
      <ul className="list-group list-group-light list-group-lg">
        <li className="list-group-item border mb-1 p-0">
          <div className="card-header d-flex justify-content-between align-items-baseline ps-2 py-1 pe-2">
            <span className='text-start fs-5'>{event.title}</span>
            <div className='pe-0'>
              <span className='me-1'>{event.date}</span>
              <span className='me-1'>-</span>
              <span>{event.time}</span>
            </div>
          </div>
          <Link to={`/events/${event.id}`} className="event-body d-flex w-100 justify-content-between pb-3">
            <div className='d-flex justify-content-between event-body mt-2'>
              <span className='ps-2 fst-italic'>{event.desc.slice(0, 30)}...</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default EventCard
