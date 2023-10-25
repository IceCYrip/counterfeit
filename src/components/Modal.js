import React from 'react'
import '../styles/Modal.css'

const Modal = ({ data, details, okay, open, qrCode, onClose }) => {
  console.log('asd', data)
  return (
    <div className='modalWrapper'>
      <div className='modalContainer'>
        <h2>Product Details</h2>

        <table className='productDetails'>
          <tbody>
            {details?.map((obj, i) => (
              <tr key={i}>
                <td className='boldLabel'>{obj?.label}</td>
                <td className='colonSeperater'>:</td>
                <td className={!!data[obj?.keyName] ? '' : 'notFound'}>
                  {!!data[obj?.keyName] ? data[obj?.keyName] : 'Not Found'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {qrCode && (
          <div className='qrCode'>
            <h3>QR CODE GENERATED!</h3>
            <img src={qrCode} alt='QR Code' className='qrCodeImg' />
          </div>
        )}

        <div className='modalBttnGrp'>
          {!qrCode && (
            <button className='okayButton' onClick={() => okay()}>
              ADD
            </button>
          )}
          <button
            className='cancelButton'
            onClick={() => (qrCode ? onClose() : open(false))}
          >
            {qrCode ? 'Close' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
