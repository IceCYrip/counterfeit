import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Index = () => {
  const menus = [
    { label: 'Manufacturer', url: '/manufacturer' },
    { label: 'Buyer', url: '/buyer' },
    { label: 'About Us', url: '/about-us' },
    { label: 'Support', url: '/support' },
  ]

  const activeMenu = localStorage.getItem('activeMenu')

  const setMenu = (activeMenu) => {
    localStorage.setItem('activeMenu', activeMenu)
  }

  return (
    <div className='wrapper'>
      <b>
        <Link to='/' onClick={() => setMenu('home')}>
          Detectify
        </Link>
      </b>
      <div class='navMenus'>
        {menus?.map((obj) => (
          <Link
            to={obj.url}
            onClick={() => setMenu(obj.label)}
            style={{
              color: activeMenu == obj.label ? '#ffff90' : 'white',
            }}
          >
            {obj.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Index
