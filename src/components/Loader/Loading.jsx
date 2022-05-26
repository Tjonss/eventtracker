import React from 'react'

const Loading = () => {
  return (
    <div className='container text-center'>
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div>
        <span>Loading...</span>
      </div>
    </div>
  )
}

export default Loading