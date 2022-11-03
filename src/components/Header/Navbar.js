import React from 'react'
import './styles.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Drawer from './Drawer'

const NavbarComp = () => {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='heading'>News App</Navbar.Brand>
          <Nav className="nav">
            <Nav.Link as={NavLink} to='/'>News</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About Us</Nav.Link>
			      <Nav.Link as={NavLink} to='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to='/sign-up'>Sign Up</Nav.Link>
            <Nav.Link eventKey={2} >
              Login
            </Nav.Link>
          </Nav>
      </Container>
      <div className='menu-div'>
        <Drawer />
      </div>
    </Navbar>
  )
}

export default NavbarComp

/*
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
    </div>*/