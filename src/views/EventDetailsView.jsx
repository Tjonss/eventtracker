import { Link, useParams } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOneEvent } from '../store/actions/eventAction' 
import moment from 'moment'

const EventDetail = () => {

  const { data: event, loading, error } = useSelector(state => state.singleEvent)

  const { id } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getOneEvent(id))
  },[dispatch, id])


  return (
    <>
      <div className='container'>
        <div className='text-center mt-3 custom-border w-100 mx-auto'>
          <span className='text-uppercase h4'>this event</span>
        </div>
        <Link to='/events' className='text-black fs-3'><i className="fa-solid fa-arrow-left-long"></i></Link>
        { event &&
          <div className="container card Event-detail example-2 mx-auto scrollbar-cyan thin pe-2">
            <div className=" text-center fs-3 p-0 card-header mt-1">
              <span className=''>{event.title}</span>
            </div>
            <div className="card-body p-3">
              <span className="card-text">{event.desc}</span>
            </div>
            <div className="card-footer text-muted text-center">
              <span className=''>{moment(event.timestamps).calendar()}</span>
            </div>
          </div>
        }

        { loading && <p>Loading...</p>}
        
      </div>  
    </>
  )
}

export default EventDetail