import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import './styles/Buyer.css'

const Buyer = () => {
  useEffect(() => {
    localStorage.setItem('activeMenu', 'Buyer')
  }, [])

  return (
    <>
      <Navbar />
      <div className='buyerSectionWrapper'>
        <div className='buyerSectionBody'>
          <h2>Scan the QR here</h2>
          <div className='qrScannerArea'>Camera Here</div>
        </div>
      </div>
    </>
  )
}

export default Buyer
