import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './styles/Buyer.css'
import QrScanner from 'react-qr-scanner'

const Buyer = () => {
  const [result, setResult] = useState({
    dataLoaded: false,
    qrData: {},
  })

  const [productData, setProductData] = useState({
    brand: '',
    productID: '',
    batchNo: '',
    price: '',
    dateOfManufacture: '',
  })

  useEffect(() => {
    localStorage.setItem('activeMenu', 'Buyer')
  }, [])

  const handleScan = (data) => {
    if (!!data?.text) {
      try {
        let decodedData = JSON.parse(data?.text)
        setResult({
          dataLoaded: true,
          qrData: decodedData,
        })
        // /verifyProduct API call
        // checkGenuine(decodedData)
      } catch (error) {
        alert('Invalid QR Code')
      }
    }
  }

  const handleError = (err) => {
    console.error(err)
    alert('Something went wrong. Please scan again')
  }

  return (
    <>
      <Navbar />
      <div className='buyerSectionWrapper'>
        <div className='buyerSectionBody'>
          <h2>Scan the QR here</h2>
          {!result.dataLoaded ? (
            <QrScanner
              onScan={handleScan}
              onError={handleError}
              style={{
                padding: '5px',
                backgroundColor: 'white',
                width: '600px',
                borderRadius: '20px',
                boxShadow: '0px 2px 5px 2px rgba(0, 0, 0, 0.5)',
              }}
            />
          ) : (
            <>Product Verified </>
          )}
        </div>
      </div>
    </>
  )
}

export default Buyer
