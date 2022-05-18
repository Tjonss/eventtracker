import '../App.css'


const CreateEvent = () => {

  return (
    <form className='create-event container mx-auto'>
      <div className='text-center my-3 custom-border w-100 mx-auto'>
        <span className='text-uppercase h4'>create a new event</span>
      </div>
      <div className="mt-2 mt-md-3">
        <div className="mb-2 mb-md-3">
          <label className="form-label mb-0" htmlFor='input-title'>Title: </label>
          <input type="text" placeholder='Type your event title..' id="input-title" className="form-control border" />
        </div>
        <div className="mb-2 mb-md-3">
          <label className="form-label mb-0" htmlFor='textbox'>Event description: </label>
          <textarea placeholder='Type your event description..'className="form-control" id='textbox'></textarea>
        </div>
        <div className="mb-3 my-md-4 d-flex justify-content-center justify-content-md-start align-items-center input-group">
          <div className='me-4'>
            <label className="mb-0" htmlFor='date'>Date: </label>
            <input type="date" placeholder='Type your event description..'className="form-control" id='date'></input>
          </div>
          <div>
            <label className="mb-0" htmlFor='time'>Time:  </label>
            <input type="time" placeholder='Type your event description..'className="form-control " id='time'></input>
          </div>
          <div className='text-center align-self-md-end ms-md-5 fs-5 mt-2 mt-md-4'>
            Set event on DATE at 23.00
          </div>
        </div>
      </div>
      <div className="d-grid mt-3 mt-md-4 mt-md-4 col-12 col-md-12 ">
        <button className='btn btn-sm rounded w-100 mx-auto btn-clr'>Add event</button>
      </div>

    </form>
  )
}

export default CreateEvent

// text-center mt-md-4 mt-4 