import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand">
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-center my-auto"
            id="navbarCenteredExample">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/create' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Create</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/events' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
      

  )
}

export default Navbar
