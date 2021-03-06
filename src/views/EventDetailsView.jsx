import { Link, useParams } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOneEvent } from '../store/actions/eventAction' 
import moment from 'moment'
import Loading from '../components/Loader/Loading'

const EventDetail = () => {

  const { data: event, loading  } = useSelector(state => state.singleEvent)

  const { id } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getOneEvent(id))
  },[dispatch, id])


  return (
    <>
      <div className='container'>
        <Link to='/events' className='text-black fs-3'><i className="fa-solid fa-arrow-left-long arrow-clr mt-3"></i></Link>
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

        { loading && <Loading />}
        
      </div>  
    </>
  )
}

export default EventDetail