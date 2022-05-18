import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Views from './views/Views';

function App() {
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
