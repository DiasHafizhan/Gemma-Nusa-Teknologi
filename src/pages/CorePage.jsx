import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Core1 from '../assets/image/core1.png'
import Core2 from '../assets/image/core2.png'
import Core3 from '../assets/image/core3.png'
import Core4 from '../assets/image/core4.png'
import Core5 from '../assets/image/core5.png'
import Core6 from '../assets/image/core6.png'

const CorePage = () => {
  return (
    <div className='core'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">Bukan Hanya Core System</h1>
            <p className='text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
              Menyediakan seluruh fitur layanan aplikasi yang dibutuhkan sesuai
              Kebutuhan dan Regulasi
            </p>
          </Col>
        </Row>
        <div className="card-title">
          <h2>Core Intrgrated System</h2>
        </div>
        <Row className='mb-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250">
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon">
              <div>
                <img src={Core1} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-main">
              <div>
                <h4>Mudah Digunakan</h4>
                <p>Aplikasi berbasis menu, sehingga memudahkan user dalam menggunakannya</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="350">
          <Col lg="6">
            <div className="card-main-layanan">
              <div>
                <h4>Aman dan Handal</h4>
                <p>
                  Mekanisme keamanan dalam aplikasi
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon-layanan">
              <div>
                <img src={Core2} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="450">
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon">
              <div>
                <img src={Core3} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-main">
              <div>
                <h4>Terus Berkembang</h4>
                <p>Aplikasi dibuat mengikuti peraturan atau regulasi yang berlaku</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="550">
          <Col lg="6">
            <div className="card-main-layanan">
              <div>
                <h4>Tailor Made</h4>
                <p>
                  Aplikasi dapat dikembangkan sesuai dengan kebutuhan klien.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon-layanan">
              <div>
                <img src={Core4} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="650">
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon">
              <div>
                <img src={Core5} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-main">
              <div>
                <h4>Implementasi Cepat</h4>
                <p>Waktu implementasi yang cepat dapat mengurangi biaya implementasi bagi klien.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="750">
          <Col lg="6">
            <div className="card-main-layanan">
              <div>
                <h4>End-To-End Process & Single Input</h4>
                <p>
                  Hanya cukup single input dari Marketing - Pembiayaan - Akunting.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon-layanan">
              <div>
                <img src={Core6} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CorePage