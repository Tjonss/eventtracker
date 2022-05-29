import './LoginView.css'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/actions/authActions'


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const loading = useSelector(state => state.auth.loading)
  const user = useSelector(state => state.auth.token)
  const error = useSelector(state => state.auth.error)

  
  const onSubmit = (formData) => {
    dispatch(loginUser(formData))
  }
  useEffect(() => {
      if(user) {
        navigate('/events')
      }
    }, [user, navigate])
 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className='text-center my-3 custom-border w-100 mx-auto'>
            <span className='text-uppercase h4'>login</span>
          </div>
          <div className="mb-4 position-relative">
            <label className="form-label mb-0 fs-5" htmlFor="email">Email</label>
            <input 
              name='email' type="email" 
              placeholder='Enter your email address'
              id="email" 
              className="form-control p-2"
              {...register("email", {
                required: 'You need to enter your email address.', 
                unique: true} )}
              />
            {errors.email && <small className='error-register'>{errors.email.message}</small> }
          </div>
          <div className="mb-4 position-relative">
            <label className="form-label mb-0 fs-5" htmlFor="password">Password</label>
            <input 
              name='password' 
              type="password" 
              placeholder='Enter your password' 
              id="password" 
              className="form-control p-2" 
              {...register("password", 
              {required: 'You need to enter a password.', 
              minLength: {value: 6, message: 'Your password must be atleast 6 characters long.'}})}/>
            {errors.password && <small className='error-register'>{errors.password.message}</small> }
          </div>
          <div className='p-2 text-center Login position-relative'>
            <button className="btn btn-sm btn-clr btn-block">{loading ? 'Logging in' : 'Login'}</button>
            <small className='exists-error'>{error && 'Email or password was incorrect.'}</small>
            <div className="mt-4">
              <Link to={'/register'} className='switch-btn text-center cursor-pointer'>
                <small className='fs-6'>Create an account</small>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login