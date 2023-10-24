import React from 'react'
import '../styles/Modal.css'

const Modal = ({ data, details, okay, open }) => {
  console.log('asd', data)
  return (
    <div className='modalWrapper'>
      <div className='modalContainer'>
        <h2>Product Details</h2>

        <table className='productDetails'>
          <tbody>
            {details?.map((obj) => (
              <tr>
                <td className='boldLabel'>{obj?.label}</td>
                <td className='colonSeperater'>:</td>
                <td className={!!data[obj?.keyName] ? '' : 'notFound'}>
                  {!!data[obj?.keyName] ? data[obj?.keyName] : 'Not Found'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='modalBttnGrp'>
          <button className='okayButton' onClick={() => okay()}>
            ADD
          </button>
          <button className='cancelButton' onClick={() => open(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
