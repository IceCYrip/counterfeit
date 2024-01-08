import React, { useEffect, useState } from 'react'
import '../styles/Dashboard.css'

import Modal from './Modal'
import backendURL from '../url'
import axios from 'axios'

const ManufacturerDashboard = () => {
  const [brand, setBrand] = useState('')
  const [productID, setProductID] = useState('')
  const [batchNo, setBatchNo] = useState('')
  const [price, setPrice] = useState('')
  const [dateOfManufacture, setDateOfManufacture] = useState('')
  const [modal, setModal] = useState(false)

  const [modalData, setModalData] = useState({
    id: '',
    brand: '',
    productID: '',
    batchNo: '',
    price: '',
    dateOfManufacture: '',
  })

  const [runAgain, setRunAgain] = useState(false)

  const [qrCode, setQRCode] = useState('')
  const [Data, setData] = useState([])

  const userData = JSON.parse(localStorage.getItem('userData') ?? '')

  useEffect(() => {
    localStorage.setItem('activeMenu', 'Manufacturer')

    setRunAgain(false)

    axios
      .post(`${backendURL}/product/getUserWiseProducts`, {
        userID: userData?.id,
      })
      .then((res) => {
        setData(
          res.data?.map((obj) => ({
            id: obj?.id,
            brand: obj?.brand,
            productID: obj?.productID,
            batchNo: obj?.batchNo,
            price: obj?.price,
            dateOfManufacture: obj?.dateOfManufacture,
            qrCode: obj?.qrCode,
          }))
        )
      })
      .catch((error) => window.alert('Something went wrong'))
  }, [runAgain, userData])

  useEffect(() => {
    if (!modal) {
      setQRCode({})
    }
  }, [modal])

  const addProduct = () => {
    if (!!brand && !!productID && !!batchNo && !!price && !!dateOfManufacture) {
      setModalData({
        brand: brand,
        productID: productID,
        batchNo: batchNo,
        price: price,
        dateOfManufacture: dateOfManufacture,
      })
      setModal(true)
    } else {
      window.alert('Please fill all the details')
    }
  }

  const finalSubmit = () => {
    const bodyForAPI = {
      brand: brand,
      productID: productID,
      batchNo: batchNo,
      price: price,
      dateOfManufacture: dateOfManufacture,
      userID: userData?.id,
    }

    axios
      .post(`${backendURL}/product/createProduct`, bodyForAPI)
      .then((res) => {
        window.alert('Product added successfully')

        setQRCode({ id: res.data?.id, qrCode: res.data?.qrCode })
        setBrand('')
        setProductID('')
        setBatchNo('')
        setPrice('')
        setDateOfManufacture('')

        setRunAgain(true)
      })
      .catch((error) => window.alert('Something went wrong'))
  }
  return (
    <>
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
              <th style={{ width: 50, borderTopLeftRadius: 10 }}>Sr. No</th>
              <th style={{ width: 150 }}>Brand</th>
              <th style={{ width: 175 }}>Product ID</th>
              <th style={{ width: 150 }}>Batch Number</th>
              <th style={{ width: 125 }}>Price</th>
              <th style={{ width: 175 }}>Date of Manufacture</th>
              <th style={{ width: 90, borderTopRightRadius: 10 }}>Actions</th>
            </tr>

            {Data?.length > 0 ? (
              Data?.map((data, i) => (
                <tr className='tableData' key={i}>
                  <td
                    style={{
                      borderBottomLeftRadius: i === Data.length - 1 ? 10 : 0,
                    }}
                  >
                    {i + 1}
                  </td>
                  <td>{data?.brand}</td>
                  <td>{data?.productID}</td>
                  <td>{data?.batchNo}</td>
                  <td>Rs. {data?.price}</td>
                  <td>{data?.dateOfManufacture}</td>
                  <td
                    style={{
                      borderBottomRightRadius: i === Data.length - 1 ? 10 : 0,
                    }}
                  >
                    <button
                      className='viewButton'
                      onClick={() => {
                        setModal(true)
                        setModalData(data)
                        setQRCode({ id: data?.id, qrCode: data?.qrCode })
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className='tableData'>
                <td
                  colSpan={7}
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  No Products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {modal && (
        <Modal
          data={modalData}
          details={[
            { label: 'Brand', keyName: 'brand' },
            { label: 'Product ID', keyName: 'productID' },
            { label: 'Batch No.', keyName: 'batchNo' },
            { label: 'Price', keyName: 'price' },
            { label: 'Date of Manufacture', keyName: 'dateOfManufacture' },
          ]}
          open={setModal}
          okay={finalSubmit}
          qrCodeData={qrCode}
          onClose={() => {
            setBrand('')
            setProductID('')
            setBatchNo('')
            setPrice('')
            setDateOfManufacture('')
            setQRCode({})
            setModalData({})
            setModal(false)
          }}
          viewOnly={!!modalData?.id}
        />
      )}
    </>
  )
}

export default ManufacturerDashboard
