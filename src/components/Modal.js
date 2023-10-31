import React from 'react'
import '../styles/Modal.css'
import { useNavigate } from 'react-router-dom'

const Modal = ({
  data,
  details,
  okay,
  open,
  qrCodeData,
  onClose,
  viewOnly = false,
}) => {
  const routeTo = useNavigate()

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

        {!!qrCodeData?.qrCode && (
          <div className='qrCode'>
            <h3>QR CODE GENERATED!</h3>

            <label>{'(Click on QR Code to see product details)'}</label>
            <img
              src={qrCodeData?.qrCode}
              alt='QR Code'
              className='qrCodeImg'
              onClick={() => {
                routeTo(`/product-details/${qrCodeData?.id}`)
              }}
            />
          </div>
        )}

        <div className='modalBttnGrp'>
          {!qrCodeData?.id && !viewOnly && (
            <button className='okayButton' onClick={() => okay()}>
              ADD
            </button>
          )}
          <button
            className='cancelButton'
            onClick={() => (!qrCodeData?.id ? onClose() : open(false))}
          >
            {!qrCodeData?.id || viewOnly ? 'Close' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
