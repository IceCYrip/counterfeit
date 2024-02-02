import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Manufacturer from './Manufacturer'
import AboutUs from './AboutUs'
import Support from './Support'
import Buyer from './Buyer'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Verify from './Verify'
import ProductDetails from './ProductDetails'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/manufacturer' element={<Manufacturer />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/support' element={<Support />} />
        <Route path='/buyer' element={<Buyer />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/product-details/:id?' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
