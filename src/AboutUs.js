import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

const AboutUs = () => {
  useEffect(() => {
    localStorage.setItem('activeMenu', 'About Us')
  }, [])
  return (
    <>
      <Navbar />
      About Us page
    </>
  )
}

export default AboutUs
