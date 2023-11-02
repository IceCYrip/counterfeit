import React, { useEffect } from 'react'

const BuyerDashboard = () => {
  useEffect(() => {
    localStorage.setItem('activeMenu', 'Manufacturer')
  }, [])

  return (
    <div className='buyerWrapper'>
      <div>BuyerDashboard</div>
    </div>
  )
}

export default BuyerDashboard
