import { Link } from 'react-router-dom'
import moment from 'moment'

const EventCard = ({ event }) => {

  return (
    <div className="Event-card mx-auto mb-2">
      <ul className="list-group list-group-light list-group-lg">
        <li className="list-group-item mb-1 p-0">
          <div className="card-header d-flex justify-content-between align-items-baseline ps-2 py-1 pe-2">
            <span className='col-2 text-start fw-bold card-spacing'>{event.title.slice(0, 18)}</span>
            <div className='pe-0'>
              <span className='col-2 me-1 p-0 small'>{moment(event.timestamps).fromNow()}</span>
            </div>
          </div>
          <Link to={`/events/${event.id}`} className="pb-3 pe-2 me-5">
            <div className='mt-2 me-3'>
              <small className='ps-2 fst-italic'>{event.desc.slice(0, 50)}...</small>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}


export default EventCard
