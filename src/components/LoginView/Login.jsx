import React from 'react'

const Login = () => {
  return (
    <form>
      <div className="container">
        <div className='text-center my-3 custom-border w-100 mx-auto'>
          <span className='text-uppercase h4'>login</span>
        </div>
        <div className="mb-4">
          <label className="form-label mb-0 fs-5" htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your email address'id="email" className="form-control p-2"  />
          {/* <small>Invalid email address</small> */}
        </div>
        <div className="mb-4">
          <label className="form-label mb-0 fs-5" htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' id="password" className="form-control p-2" />
          {/* <small>The password was incorrect</small> */}
        </div>
        <button className="btn btn-lg btn-clr btn-primary btn-block">Sign in</button>
      </div>
    </form>
  )
}

export default Login