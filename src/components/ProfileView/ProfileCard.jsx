import moment from 'moment'
import { Link } from 'react-router-dom'

const ProfileCard = ({ event }) => {
  return (
      <Link to={`/events/${event.id}`} className="list-group list-group-light list-group-lg">
        <li className="list-group-item border border-0 mb-1 ps-2 d-flex justify-content-between align-items-center">
          <span>{event.title.slice(0, 20)} </span>
          <div className='me-2'>
            <span className=''>{moment(event.timestamps).fromNow()}</span>
          </div>
        </li>
      </Link>
  )
}

export default ProfileCard