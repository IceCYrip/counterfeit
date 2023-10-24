import './styles/App.css'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='homeWrapper'>
      <Navbar />

      <div className='homeBody'>
        <div className='bodyLeft'>
          <h1>Your Trust, Our Technology</h1>
          <div className='bttnGrp'>
            <span className='dashboardButton'>
              {/* <Link to="/manufacturer">Add Product</Link> */}
              <Link to='/manufacturer'>Manufacturer</Link>
            </span>
            <span className='dashboardButton'>
              <Link to='/verify'>Verify Product</Link>
            </span>
          </div>
        </div>
        <br />
        <img
          className='dashboardImg'
          src='/dashboardImage.png'
          alt='Dashboard'
        />
      </div>
    </div>
  )
}

export default App
