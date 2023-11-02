import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

const Buyer = () => {
  useEffect(() => {
    localStorage.setItem('activeMenu', 'Buyer')
  }, [])

  return (
    <>
      <Navbar />
      Buyer page
    </>
  )
}

export default Buyer
