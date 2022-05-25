import './Create.css'
import { useDispatch } from 'react-redux'
import { createNewEvent } from '../../store/actions/handleEventActions'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'


const CreateForm = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    setLoggedIn(true)
    dispatch(createNewEvent(formData))
  }
  useEffect(() => {
    if(loggedIn)
    navigate('/events')
  }, [loggedIn, navigate])
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='create-event'>
      <div className="mt-2 mt-md-3">
        <div className="mb-4 mb-md-4 position-relative">
          <label className="form-label mb-0" htmlFor='input-title'>Title: </label>
          <input 
            name='title'
            {...register("title", {required: 'You need to enter a title'})}
            type="text" 
            placeholder='Type your event title..' 
            id="input-title" 
            className="form-control"/>
          {errors.title && <small className='error'>{errors.title.message}</small> } 
        </div>
        <div className="mb-5 ">
          <label className="form-label mb-0" htmlFor='textbox'>Event description: </label>
          <textarea 
            {...register('desc', {required: 'You need to enter a description'})}
            name='desc' 
            placeholder='Type your event description..'
            className="form-control" 
            id='textbox'></textarea>
            {errors.desc && <small className='error'>{errors.desc.message}</small> } 
        </div>
        <div className="mb-5 d-flex justify-content-center justify-content-md-between align-items-center position-relative">
          <div className="d-flex flex-column text-center">
            <input 
              {...register('timestamps', {required: 'You need to enter date and time.'})}
              type="datetime-local" 
              name="timestamps" 
              className='form-control'/>
              <div className='text-md-start'>

              {errors.timestamps && <small className='error-date'>{errors.timestamps.message}</small> } 
              </div>
          </div>
        </div>
      </div>
      <div className="d-grid mt-2 mt-md-2 col-12 col-md-12 ">
        <button className='btn btn-sm rounded w-100 mx-auto btn-clr'>Add event</button>
      </div>
    </form>
  )
}

export default CreateForm


