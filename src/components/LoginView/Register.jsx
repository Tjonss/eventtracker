import {useState} from 'react'

const Register = () => {


  const [registerForm, setRegisterForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    setRegisterForm(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  return (
      <form>
        <div className='container'>
          <div className='text-center my-3 custom-border w-100 mx-auto'>
            <span className='text-uppercase h4'>Register</span>
          </div>
          <div className="row mb-4">
            <div className="col mb-md-3">
              <label className="form-label mb-0" htmlFor="firstName">First name</label>
              <input name='firstname' type="text" id="firstName" className="form-control" />
              {/* <small>Invalid input</small> */}

            </div>
            <div className="col">
              <label className="form-label mb-0" htmlFor="lastName">Last name</label>
              <input name='lastname' type="text" id="lastName" className="form-control" />
              {/* <small>Invalid input</small> */}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label mb-0" htmlFor="email">Email address</label>
            <input name='email' type="email" id="email" className="form-control" />
            {/* <small>Invalid email address</small> */}
          </div>

          <div className="mb-5">
            <label className="form-label mb-0" htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
            {/* <small>The password was incorrect</small> */}
          </div>
          <button className="btn btn-primary btn-clr btn-block">Sign up</button> 
        </div>
      </form>
  )
}

export default Register