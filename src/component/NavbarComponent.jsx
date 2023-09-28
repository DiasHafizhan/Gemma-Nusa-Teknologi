import React from 'react'
import Logo from '../assets/image/logo.png'
import { useLocation } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { navLink } from '../data/index'


const NavbarComponent = () => {

  const location = useLocation()
  const [aktif, setAktif] = React.useState(true)
  const [scroll, setScroll] = React.useState(false)
  React.useEffect(() => {
    if (location.pathname == '/') {
      setAktif(true)
    } else {
      setAktif(false)
    }
  }, [location, aktif])

  React.useEffect(() =>{
    const onScroll = ()=>{
      if(window.scrollY > 50){
        setScroll(true)
      } else{
        setScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () =>{
      window.removeEventListener('scroll', onScroll)
    }
  }, [])


  return (

    <Navbar expand="lg" className={scroll ? 'navbar-fixed': ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="45"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {navLink.map((data) => {
              return (
                <div className="nav-link" key={data.id} to={data.patch}>
                  <Nav.Link href={aktif ? data.link : data.linkAktif}>{data.text}</Nav.Link>
                </div>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default NavbarComponent