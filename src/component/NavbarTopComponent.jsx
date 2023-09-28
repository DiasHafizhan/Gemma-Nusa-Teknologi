import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'

const NavbarTopComponent = () => {
  return (
      <Navbar className="navbar-top">
        <Container>
          <Navbar.Brand href="#home">Gemma Nusa Teknologi</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='d-flex gap-2'>
              <Link><i className='bx bx-map'></i></Link>
              <Link><i className='bx bxs-user-circle' ></i></Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavbarTopComponent