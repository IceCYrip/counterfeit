import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

const Support = () => {
  useEffect(() => {
    localStorage.setItem('activeMenu', 'Support')
  }, [])
  return (
    <>
      <Navbar />
      Support page
    </>
  )
}

export default Support
