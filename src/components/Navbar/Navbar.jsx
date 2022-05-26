import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authActions'
import { clearEvents } from '../../store/actions/eventsAction'


const Navbar = () => {

  const token = useSelector(state => state.auth.token)

  const dispatch = useDispatch()

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand">
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-start justify-content-sm-center my-auto"
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
                    <Link 
                      to='/login' 
                      className='navbar-logout' 
                      onClick={() => dispatch(logout(), dispatch(clearEvents()))}>
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </Link>
                  </li>
                : <li className="nav-item">
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Login</NavLink>
                  </li>
                }          
              </>
              )
              : <li className='text-start text-sm-center fs-4'>
                  <span className='text-white'>EventTracker</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
