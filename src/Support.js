import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import './styles/Support.css'

const Support = () => {
  useEffect(() => {
    localStorage.setItem('activeMenu', 'Support')
  }, [])
  return (
    <>
      <Navbar />
      <div className='supportWrapper'>
        <div className='supportBody'>
          <h1>How can we help you?</h1>
          <div className='flexBox'>
            <div className='container'>
              <div className='containerHeader'>
                <h3>Buyer</h3>
              </div>
              <div className='reachOutText'>Reach out to us at:</div>
              <table className='contactDetails'>
                <tbody>
                  <tr>
                    <td>Mobile No.</td>
                    <td>:</td>
                    <td>+918793971848</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>:</td>
                    <td>buyersupportdetectify@gmail.com</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>Address</td>
                    <td style={{ verticalAlign: 'top' }}>:</td>
                    <td>
                      Usha Mittal Institute of Technology,
                      <br />
                      SNDT University, <br />
                      Juhu Campus - 400049
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='container'>
              <div className='containerHeader'>
                <h3>Manufacturer</h3>
              </div>
              <div className='reachOutText'>Reach out to us at:</div>
              <table className='contactDetails'>
                <tbody>
                  <tr>
                    <td>Mobile No.</td>
                    <td>:</td>
                    <td>+918793971848</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>:</td>
                    <td>manufacturersupportdetectify@gmail.com</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>Address</td>
                    <td style={{ verticalAlign: 'top' }}>:</td>
                    <td>
                      Usha Mittal Institute of Technology,
                      <br />
                      SNDT University, <br />
                      Juhu Campus - 400049
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support
