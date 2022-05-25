import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authActions'


const Navbar = () => {

  const token = useSelector(state => state.auth.token)

  const dispatch = useDispatch()

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand">
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-center justify-content-sm-center my-auto"
            id="navbarCenteredExample">
            <ul className="navbar-nav mb-lg-0">
            { token 
            ? (
              <>
                <li className="nav-item">
                  <NavLink to='/create' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Create</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/events' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Events</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Profile</NavLink>
                </li>  
                { token 
                ? <li>
                    <Link to='/login' className='navbar-logout d-none d-sm-block' onClick={() => dispatch(logout())}>Logout</Link>
                    <Link to='/login' className='navbar-logout d-sm-none' onClick={() => dispatch(logout())}><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                  </li>
                : <li className="nav-item">
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Login</NavLink>
                  </li>
                }          
              </>
              )
              : (
                  <li className='text-center text-sm-center fs-4'>
                    <span className='text-white'>EventTracker</span>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
      

  )
}

export default Navbar
