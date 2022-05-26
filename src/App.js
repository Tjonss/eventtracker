import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Views from './views/Views';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUser } from './store/actions/authActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className='tracker position-relative'>
        <Navbar />
        
        <div className="container">
          <Views />
        </div>

        <Footer />
      </div>
    </div>
      
  );
}

export default App;
