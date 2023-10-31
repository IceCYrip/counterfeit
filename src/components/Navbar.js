import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Index = () => {
  const menus = [
    { label: 'Manufacturer', url: '/manufacturer' },
    { label: 'Buyer', url: '/buyer' },
    { label: 'About Us', url: '/about-us' },
    { label: 'Support', url: '/support' },
  ]

  const routeTo = useNavigate()

  const activeMenu = localStorage.getItem('activeMenu')
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') || 'false'
  )

  const setMenu = (activeMenu) => {
    localStorage.setItem('activeMenu', activeMenu)
  }

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userType')
    localStorage.removeItem('userData')

    setIsLoggedIn(false)

    routeTo('/')
  }

  return (
    <div className='wrapper'>
      <b>
        <Link to='/' onClick={() => setMenu('home')}>
          Detectify
        </Link>
      </b>
      <div className='navMenus'>
        {menus?.map((obj, i) => (
          <Link
            key={i}
            to={obj.url}
            onClick={() => setMenu(obj.label)}
            style={{
              color: activeMenu === obj.label ? '#ffff90' : 'white',
            }}
          >
            {obj.label}
          </Link>
        ))}
        {isLoggedIn && (
          <img
            src='/Logout.svg'
            alt='logout'
            className='logoutImg'
            onClick={() => logout()}
          />
        )}
      </div>
    </div>
  )
}

export default Index
