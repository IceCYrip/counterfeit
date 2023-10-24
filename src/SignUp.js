import React from 'react'
import Navbar from './components/Navbar'
import './styles/SignUp.css'

const SignUp = () => {
  return (
    <div className='signUpWrapper'>
      <Navbar />
      <div className='signUpBody'>
        <div className='bodyLeft'>
          <img className='signUpImage' src='/loginPage.png' alt='Sign Up' />
        </div>
        <div className='bodyRight'>
          <div className='formContainer'>
            <h1>Sign Up</h1>
            <div className='signUpFieldsContainer'>
              <label htmlFor='nameOfUser'>Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                name='nameOfUser'
              />
            </div>
            <div className='signUpFieldsContainer'>
              <label htmlFor='email'>Email</label>
              <input type='text' placeholder='Enter your email' name='email' />
            </div>
            <div className='signUpFieldsContainer'>
              <label htmlFor='password'>Password</label>
              <input
                type='text'
                placeholder='Create a password'
                name='password'
              />
            </div>

            <div className='signUpBttnGrp'>
              <button className='signInButton' onClick={() => {}}>
                Sign Up
              </button>
              <label className='signInText'>
                Already have an account?{' '}
                <label className='signInLink' onClick={() => {}}>
                  Sign in
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
