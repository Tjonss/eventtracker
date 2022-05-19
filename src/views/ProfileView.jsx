import React from 'react'
import '../App.css'

const ProfileView = () => {
  return (
    <div className='container Profile'>
      <div className='text-center my-3 custom-border w-100 mx-auto'>
        <span className='text-uppercase h4'>Jonas Engström</span>
      </div>
      <div class="d-flex justify-content-around mb-2 mx-auto ">
        <button class="col-sm-5 btn btn-clr btn-sm" type="button">My events</button>
        <button class="col-sm-5 btn btn-clr btn-sm" type="button">Recent Events</button>
      </div>
      

      <div className="example-2 w-100 mx-auto scrollbar-cyan thin pe-1">
        <ul className="list-group list-group-light list-group-lg">
          <li className="list-group-item border border-0 mb-1 ps-2 d-flex justify-content-between align-items-center">
            <span>Badade i ån</span>
            <div className='me-4'>
              <span className='me-4'>2022-05-13</span>
              <span>20:22</span>
            </div>
          </li>
          <li className="list-group-item border border-0 mb-1 ps-2 d-flex justify-content-between align-items-center">
            <span>Badade i ån</span>
            <div className='me-4'>
              <span className='me-4'>2022-05-13</span>
              <span>20:22</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="d-grid mt-3 mt-md-4 mt-md-4 col-12 col-md-12 ">
        <button className='btn btn-sm rounded w-100 mx-auto btn-clr'>LOGOUT</button>
      </div>
    </div>
  )
}

export default ProfileView