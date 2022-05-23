import '../App.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createNewEvent } from '../store/actions/handleEventActions'
import { useNavigate } from 'react-router-dom'




const CreateEvent = () => {

  const titleInput = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errors, setErrors] = useState(false)
  const [formInput, setFormInput] = useState({
    title: '',
    desc: '',
    date: '',
    time: ''
  })
   
  useEffect(() => {
    titleInput.current.focus()
  },[titleInput])
  
  const handleChange = e => {
    setFormInput(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(formInput.title.trim() === '') {
      setErrors(true)
    }
    if(formInput.desc.trim() === '') {
      setErrors(true)
    }
    if(formInput.date && formInput.time === '') {
      setErrors(true)
    }  
    if(!errors) {

      dispatch(createNewEvent(formInput))
    }
    navigate('/events')
  }
 

  return (
    <form onSubmit={handleSubmit} className='create-event container mx-auto'>
      <div className='text-center mt-3 mb-2 custom-border w-100 mx-auto'>
        <span className='text-uppercase h4'>create a new event</span>
      </div>
      <div className="mt-2 mt-md-3">
        <div className="mb-1 mb-md-1">
          <label className="form-label mb-0" htmlFor='input-title'>Title: </label>
          <input 
            ref={titleInput}
            value={formInput.title} 
            onChange={handleChange} 
            name='title' 
            type="text" 
            placeholder='Type your event title..' 
            id="input-title" 
            className="form-control border" />
             {/* <small className='ms-1' style={errorMessage}>Felmeddelande</small> */}
            {errors && <small style={errorMessage} className={errors ? 'visible' : 'invisible'}>Felmeddelande</small> }
        </div>
        <div className="mb-0 mb-md-1">
          <label className="form-label mb-0" htmlFor='textbox'>Event description: </label>
          <textarea 
            value={formInput.desc} 
            onChange={handleChange} 
            name='desc' 
            placeholder='Type your event description..'
            className="form-control" 
            id='textbox'></textarea>
          <small className='ms-1' style={errorMessage}>Felmeddelande</small>
        </div>
        <div className="mb-0  d-flex justify-content-center justify-content-md-between align-items-center">
        <div className="d-flex flex-column">
          <div className='d-flex mb-1'>
            <div className='me-4'>
              <label className="mb-0" htmlFor='date'>Date: </label>
              <input 
                value={formInput.date} 
                onChange={handleChange} 
                name='date' 
                type="date" 
                placeholder='Type your event description..'
                className="form-control" 
                id='date' />
            </div>
            <div>
              <label className="mb-0" htmlFor='time'>Time:  </label>
              <input 
                value={formInput.time} 
                onChange={handleChange} 
                name='time' 
                type="time" 
                placeholder='Type your event description..'
                className="form-control " 
                id='time'>
              </input>
            </div>
          </div>
          <small className='d-md-none text-center'style={errorMessage}>Felmeddelande</small>
        </div>
      </div>
        <small className=' d-none d-md-block' style={errorMessage}>Felmeddelande</small>
      </div>
      <div className="d-grid mt-2 mt-md-2 col-12 col-md-12 ">
        <button className='btn btn-sm rounded w-100 mx-auto btn-clr'>Add event</button>
      </div>
    </form>
  )
}

export default CreateEvent


const errorMessage = {
  color: 'red',
  fontSize: '.8rem',
  letterSpacing: '.2px',
  padding: '0'
}