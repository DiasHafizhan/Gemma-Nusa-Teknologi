import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/image/logo.png'

const FooterComponent = () => {
  return (
    <div className='footer'>
      <Container>
        <a class="footer-logo">
          <img src={Logo} alt="" />
        </a>

        <div class="footer-office">
          <p class="footer-judul">Office Jakarta</p>
          <p>
            Jl. Cikini Raya Nomor 09 Jakarta Pusat Daerah Khusus Ibukota Jakarta
          </p>
          <p>Contact(+621210381668)</p>
          <p class="copyright">&copy; 2023 Gemma Nusa Teknologi</p>
        </div>
      </Container>
    </div>
  )
}

export default FooterComponent