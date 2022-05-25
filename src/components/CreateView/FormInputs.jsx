import React from 'react'

const FormInputs = () => {

  useEffect(() => {
      titleInput.current.focus()

    },[titleInput])


  // const [formInput, setFormInput] = useState({
  //   title: '',
  //   desc: '',
  //   date: '',
  //   time: ''
  // })

  // const handleChange = e => {
  //   setFormInput(state => ({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   }))
  // }
   

  return (
    <>
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
            className="form-control border"/>
            <small style={errorMessage}>Felmeddelande</small> 
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
    </>
  )
}

export default FormInputs