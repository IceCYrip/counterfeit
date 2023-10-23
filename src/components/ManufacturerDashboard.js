import React from 'react'
import '../styles/Dashboard.css'

const ManufacturerDashboard = () => {
  return (
    <div className='manufacturerWrapper'>
      <div className='manufacturerBody'>
        {/* <h1>Add Product</h1> */}

        <div className='fieldsWrapper'>
          <div className='inputFields'>
            <label htmlFor='brand'>Brand</label>
            <input
              type='text'
              placeholder="Enter your brand's name"
              name='brand'
            />
          </div>
          <div className='inputFields'>
            <label htmlFor='productId'>Product ID</label>
            <input
              type='text'
              placeholder='Enter your product id'
              name='productId'
            />
          </div>
          <div className='inputFields'>
            <label htmlFor='batchNumber'>Batch Number</label>
            <input
              type='text'
              placeholder='Enter your batch number'
              name='batchNumber'
            />
          </div>
          <div className='inputFields'>
            <label htmlFor='price'>Price</label>
            <input type='text' placeholder='Enter your price' name='price' />
          </div>
          <div className='inputFields'>
            <label htmlFor='dateOfManufacture'>Date of Manufacture</label>
            <input
              type='text'
              placeholder='Enter date of manufacture'
              name='dateOfManufacture'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManufacturerDashboard
