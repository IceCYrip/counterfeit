import React, { useState } from 'react'
import '../styles/Dashboard.css'

import Modal from './Modal'

const ManufacturerDashboard = () => {
  const [brand, setBrand] = useState('')
  const [productID, setProductID] = useState('')
  const [batchNo, setBatchNo] = useState('')
  const [price, setPrice] = useState('')
  const [dateOfManufacture, setDateOfManufacture] = useState('')
  const [modal, setModal] = useState(false)

  const [Data, setData] = useState([
    {
      brand: 'Adidas',
      productID: 'PID_110',
      batchNo: 10,
      price: 349,
      dateOfManufacture: '10-10-2023',
    },
    {
      brand: 'Calvin Klein',
      productID: 'PID_111',
      batchNo: 11,
      price: 399,
      dateOfManufacture: '11-10-2023',
    },
    {
      brand: 'Reebok',
      productID: 'PID_112',
      batchNo: 12,
      price: 249,
      dateOfManufacture: '12-10-2023',
    },
    {
      brand: 'Puma',
      productID: 'PID_113',
      batchNo: 13,
      price: 599,
      dateOfManufacture: '13-10-2023',
    },
    {
      brand: 'Nike',
      productID: 'PID_114',
      batchNo: 14,
      price: 299,
      dateOfManufacture: '14-10-2023',
    },
  ])

  const addProduct = () => {
    if (!!brand && !!productID && !!batchNo && !!price && !!dateOfManufacture) {
      setModal(true)
    } else {
      window.alert('Please fill all the details')
    }
  }

  const finalSubmit = () => {
    setData((prev) => [
      ...prev,
      {
        brand: brand,
        productID: productID,
        batchNo: batchNo,
        price: price,
        dateOfManufacture: dateOfManufacture,
      },
    ])
    setBrand('')
    setProductID('')
    setBatchNo('')
    setPrice('')
    setDateOfManufacture('')
    setModal(false)
  }
  return (
    <div className='manufacturerWrapper'>
      <div className='manufacturerBody'>
        <h1>Products</h1>

        <div className='fieldsWrapper'>
          <div className='inputFields'>
            <label htmlFor='brand'>Brand</label>
            <input
              type='text'
              value={brand}
              placeholder="Enter your brand's name"
              name='brand'
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className='inputFields'>
            <label htmlFor='productId'>Product ID</label>
            <input
              type='text'
              value={productID}
              placeholder='Enter your product id'
              name='productId'
              onChange={(e) => setProductID(e.target.value)}
            />
          </div>
          <div className='inputFields'>
            <label htmlFor='batchNumber'>Batch Number</label>
            <input
              type='text'
              value={batchNo}
              placeholder='Enter your batch number'
              name='batchNumber'
              onChange={(e) => setBatchNo(e.target.value)}
            />
          </div>
          <div className='inputFields'>
            <label htmlFor='price'>Price</label>
            <input
              type='text'
              value={price}
              placeholder='Enter your price'
              name='price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='inputFields'>
            <label htmlFor='dateOfManufacture'>Date of Manufacture</label>
            <input
              type='text'
              value={dateOfManufacture}
              placeholder='Enter date of manufacture'
              name='dateOfManufacture'
              onChange={(e) => setDateOfManufacture(e.target.value)}
            />
          </div>
        </div>
        <button className='addProductButton' onClick={() => addProduct()}>
          Add Product
        </button>

        <table className='productTable'>
          <tbody>
            <tr className='tableData'>
              <th style={{ width: 50, borderTopLeftRadius: 15 }}>Sr. No</th>
              <th style={{ width: 250 }}>Brand</th>
              <th style={{ width: 200 }}>Product ID</th>
              <th style={{ width: 175 }}>Batch Number</th>
              <th style={{ width: 175 }}>Price</th>
              <th style={{ width: 175, borderTopRightRadius: 15 }}>
                Date of Manufacture
              </th>
            </tr>

            {Data?.map((data, i) => (
              <tr className='tableData'>
                <td
                  style={{
                    borderBottomLeftRadius: i === Data.length - 1 ? 15 : 0,
                  }}
                >
                  {i + 1}
                </td>
                <td>{data?.brand}</td>
                <td>{data?.productID}</td>
                <td>{data?.batchNo}</td>
                <td>Rs. {data?.price}</td>
                <td
                  style={{
                    borderBottomRightRadius: i === Data.length - 1 ? 15 : 0,
                  }}
                >
                  {data?.dateOfManufacture}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modal && (
        <Modal
          data={{
            // brand: brand,
            // productID: productID,
            // batchNo: batchNo,
            // price: price,
            // dateOfManufacture: dateOfManufacture,
            brand: 'brand123',
            productID: 'productID123',
            batchNo: '',
            price: 'price123',
            dateOfManufacture: 'dateOfManufacture123',
          }}
          details={[
            { label: 'Brand', keyName: 'brand' },
            { label: 'Product ID', keyName: 'productID' },
            { label: 'Batch No.', keyName: 'batchNo' },
            { label: 'Price', keyName: 'price' },
            { label: 'Date of Manufacture', keyName: 'dateOfManufacture' },
          ]}
          open={setModal}
          okay={finalSubmit}
        />
      )}
    </div>
  )
}

export default ManufacturerDashboard
