import './LoginView.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/actions/authActions'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const loading = useSelector(state => state.auth.loading)

 
  const onSubmit = (formData) => {
    dispatch(registerUser(formData))
  }
 
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='container Register'>
        <div className='text-center my-3 custom-border w-100 mx-auto'>
          <span className='text-uppercase h4'>Register</span>
        </div>
        <div className="row mb-3">
          <div className="mb-3 position-relative">
            <label className="form-label mb-0" htmlFor="firstName">First name: </label>
            <input className="form-control"
              placeholder='Enter your first name'
              type="text" 
              name='firstName' 
              id="firstName" 
              {...register("firstName", {required: 'You need to enter your first name.'})}/>
            {errors.firstName && <small className='error-register'>{errors.firstName.message}</small> }
          </div>
          <div className="mb-1 position-relative">
            <label className="form-label mb-0" htmlFor="lastName">Last name: </label>
            <input className="form-control"
              placeholder='Enter your last name'
              type="text" 
              name='lastName' 
              id="lastName" 
              {...register("lastName", {required: 'You need to enter your last name.'})}/>
            {errors.lastName && <small className='error-register'>{errors.lastName.message}</small> }
          </div>
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label mb-0" htmlFor="email">Email address: </label>
          <input className="form-control"
            type="email" 
            name='email' 
            id="email" 
            placeholder='Enter your email'
            {...register("email", {required: 'You need to enter your email address.', unique: true} )}/>
          {errors.email && <small className='error-register'>{errors.email.message}</small> }
        </div>
        <div className="mb-4 position-relative">
          <label className="form-label mb-0" htmlFor="password">Password: </label>
          <input className="form-control"
            type='password'
            name='password'
            id="password"
            placeholder='Enter password'
            {...register("password", 
            {required: 'You need to enter a password.', 
            minLength: {value: 6, message: 'Your password must be atleast 6 characters long.'}})}/>
          {errors.password && <small className='error-register'>{errors.password.message}</small> }    
        </div>
        <div className='p-2 text-center Login'>
          <button className="btn btn-sm btn-clr btn-block">{loading ? 'Creating account' : 'Sign up'}</button> 
          <div className='mt-2'>
            <Link to={'/login'} className='switch-btn text-center mt-1 cursor-pointer'>
              <small className='fs-6'>Already have an account?</small>
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register