import CreateForm from '../components/CreateView/CreateForm'

const CreateEvent = () => {

  return (
     <>
      <div className="container">
        <div className='text-center mt-3 mb-2 custom-border w-100 mx-auto'>
            <span className='text-uppercase h4'>create a new event</span>
          </div>
        <CreateForm />
      </div>
    </>
  )
}

export default CreateEvent

