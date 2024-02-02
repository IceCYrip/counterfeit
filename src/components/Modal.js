import React from 'react'
import '../styles/Modal.css'

const Modal = ({
  data,
  details,
  okay,
  open,
  qrCodeData,
  onClose,
  viewOnly = false,
}) => {
  const saveQRCode = () => {
    const link = document.createElement('a')
    link.href = qrCodeData?.qrCode
    link.download = `${data?.brand}_${data?.productID}` // Set the desired file name with extension
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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

            <label>{'(Click on QR Code to download)'}</label>
            <img
              src={qrCodeData?.qrCode}
              alt='QR Code'
              className='qrCodeImg'
              onClick={saveQRCode}
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
