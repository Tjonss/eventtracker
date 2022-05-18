import '../App.css'


const CreateEvent = () => {

  return (
    <form className='create-event container mx-auto'>
      <div className='text-center mt-2 custom-border w-75 mx-auto'>
        <span className='text-uppercase h4'>create a new event</span>
      </div>
      <div className="container">
        <div className="mb-3">
          <label className="form-label mb-0" htmlFor='input-title'>Title: </label>
          <input type="text" placeholder='Type your event title..' id="input-title" className="form-control border" />
        </div>
        <div className="mb-4">
          <label className="form-label mb-0" htmlFor='textbox'>Event description: </label>
          <textarea placeholder='Type your event description..'className="form-control" id='textbox'></textarea>
        </div>
        <div className="mb-4 d-flex justify-content-start align-items-center input-group">
          <div className='me-4'>
            <label className="mb-0" htmlFor='date'>Date: </label>
            <input type="date" placeholder='Type your event description..'className="form-control" id='date'></input>
          </div>
          <div>
            <label className="mb-0" htmlFor='time'>Time:  </label>
            <input type="time" placeholder='Type your event description..'className="form-control " id='time'></input>
          </div>
          <div className='ms-5 align-self-end fs-5'>
            Set event on DATE at 23.00
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className='btn btn-md rounded w-75 btn-clr'>Add event</button>
      </div>

    </form>
  )
}

export default CreateEvent