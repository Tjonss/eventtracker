import { useState } from 'react'

const Login = () => {


  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })


  const handleChange = e => {
    setLoginForm(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className='text-center my-3 custom-border w-100 mx-auto'>
          <span className='text-uppercase h4'>login</span>
        </div>
        <div className="mb-4">
          <label className="form-label mb-0 fs-5" htmlFor="email">Email</label>
          <input onChange={handleChange} name='email'type="email" placeholder='Enter your email address'id="email" className="form-control p-2"  />
          {/* <small>Invalid email address</small> */}
        </div>
        <div className="mb-4">
          <label className="form-label mb-0 fs-5" htmlFor="password">Password</label>
          <input onChange={handleChange} name='password' type="password" placeholder='Enter your password' id="password" className="form-control p-2" />
          {/* <small>The password was incorrect</small> */}
        </div>
        <button className="btn btn-lg btn-clr btn-primary btn-block">Sign in</button>
      </div>
    </form>
  )
}

export default Login