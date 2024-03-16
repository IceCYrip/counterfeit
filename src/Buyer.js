import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './styles/Buyer.css'
import './styles/SweetAlert2.css'
import QrScanner from 'react-qr-scanner'
import Swal from 'sweetalert2'

const Buyer = () => {
  const [result, setResult] = useState({
    dataLoaded: false,
    verified: false,
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
        console.log('ScannedData: ', decodedData)
        setResult({
          dataLoaded: true,
          verified: true,
          qrData: decodedData,
        })
        // /verifyProduct API call
        // checkGenuine(decodedData)
        Swal.fire({
          icon: 'success',
          // title: "Error",
          text: 'Product verified successfully',
          customClass: {
            confirmButton: 'btnSuccess',
          },
          buttonsStyling: false,
        })
      } catch (error) {
        // alert('Invalid QR Code')
        setResult({
          dataLoaded: true,
          verified: false,
          qrData: {},
        })
        Swal.fire({
          icon: 'error',
          // title: "Error",
          text: 'Invalid QR Code. No data found',
          customClass: {
            confirmButton: 'btnError',
          },
          buttonsStyling: false,
        })
      }
    }
  }

  const handleError = (err) => {
    console.error(err)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please scan again.',
      customClass: {
        confirmButton: 'btnError',
      },
      buttonsStyling: false,
    })
  }

  return (
    <>
      <Navbar />
      <div className='buyerSectionWrapper'>
        <div className='buyerSectionBody'>
          {!result.dataLoaded && <h2>Scan the QR here</h2>}{' '}
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
            <div className='resultOrientation'>
              {result.verified ? (
                <span>
                  The product you scanned has <b>PASSED</b> the verification and
                  is <b>GENUINE</b> .
                </span>
              ) : (
                <span>
                  The product you have scanned is <b>NOT</b> genuine. Kindly
                  contact the manufacturer.
                </span>
              )}
              <button
                className='btnPrimary'
                onClick={() =>
                  setResult({
                    dataLoaded: false,
                    verified: false,
                    qrData: {},
                  })
                }
              >
                Scan Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Buyer
