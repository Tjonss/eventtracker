import React from 'react'

const Register = () => {
  return (
      <form>
        <div className='container'>
          <div className='text-center my-3 custom-border w-100 mx-auto'>
            <span className='text-uppercase h4'>Register</span>
          </div>
          <div className="row mb-4">
            <div className="col mb-md-3">
              <label className="form-label mb-0" htmlFor="firstName">First name</label>
              <input type="text" id="firstName" className="form-control" />
              {/* <small>Invalid input</small> */}

            </div>
            <div className="col">
              <label className="form-label mb-0" htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" className="form-control" />
              {/* <small>Invalid input</small> */}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label mb-0" htmlFor="email">Email address</label>
            <input type="email" id="email" className="form-control" />
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