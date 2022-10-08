import React from 'react'
import './styles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>
            News App
        </div>
        <div className='nav-links'>
            <a className='links' href='/'>
                <p>News</p>
            </a>
            <a className='links' href='/about-us'>
                <p>About Us</p>
            </a>
            <a className='links' href='/contact'>
                <p>Contact Us</p>
            </a>
            <a className='links' href='/sign-up'>
                <p>Sign Up</p>
            </a>
            <a className='links' href='/login'>
                <p>Login</p>
            </a>
        </div>
    </div>
  )
}

export default Navbar