import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './styles/Manufacturer.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import backendURL from './url'

const Manufacturer = () => {
  const routeTo = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || 'false')

  useEffect(() => {
    !!isLoggedIn && routeTo('/dashboard')
  }, [])

  const login = () => {
    const bodyForAPI = {
      email: username,
      password: password,
    }

    axios
      .post(`${backendURL}/auth/login`, bodyForAPI)
      .then((res) => {
        const userData = JSON.stringify(res.data)
        localStorage.setItem('userData', userData)
        localStorage.setItem('userType', res.data?.userType)
        localStorage.setItem('isLoggedIn', 'true')

        routeTo('/dashboard')
      })
      .catch((error) => window.alert('Something went wrong'))
  }

  return (
    <div className='loginWrapper'>
      <Navbar />
      <div className='loginBody'>
        <h1>Login</h1>
        <div className='loginContainer'>
          <div className='inputFieldsContainer'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              placeholder='Enter email or username'
              name='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='inputFieldsContainer'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label className='forgotPassword'>Forgot Password?</label>
          <div className='loginBttnGrp'>
            <button className='loginButton' onClick={() => login()}>
              Login
            </button>
            <label className='signUpText'>
              Don't have an account?{' '}
              <label className='signUpLink' onClick={() => routeTo('/sign-up')}>
                Sign Up
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manufacturer
