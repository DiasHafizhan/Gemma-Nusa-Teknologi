import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Manage1 from '../assets/image/manage1.png'
import Manage2 from '../assets/image/manage2.png'
import Manage3 from '../assets/image/manage3.png'
import Manage4 from '../assets/image/manage4.png'
import Manage5 from '../assets/image/manage5.png'

const ManagePage = () => {
  return (
    <div className='manage'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">Fokus Pada Bisnis Saja</h1>
            <p className='text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
              Alternatif Solusi menghadapi tingginya investasi awal (CAPEX) dan biaya operasional (OPEX) atas implementasi TI
            </p>
          </Col>
        </Row>
        <div className="card-title">
          <h2>Manage Service</h2>
        </div>
        <Row className='mb-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250">
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon">
              <div>
                <img src={Manage1} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-main">
              <div>
                <h4>Data Center yang andal</h4>
                <p>ketersediaan/availability sistem tetap terjaga</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="350">
          <Col lg="6">
            <div className="card-main-layanan">
              <div>
                <h4>Ketersediaan 2 jaringan yang terpisah</h4>
                <p>
                  Ketersediaan 2 jaringan yang terpisah,untuk dapat menjaga kontinuitas bisnis
                  klien
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon-layanan">
              <div>
                <img src={Manage2} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="450">
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon">
              <div>
                <img src={Manage3} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-main">
              <div>
                <h4>Dukungan yang siap 24/7</h4>
                <p>untuk penanganan insiden lebih cepat</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="550">
          <Col lg="6">
            <div className="card-main-layanan">
              <div>
                <h4>standar keamanan terkini</h4>
                <p>
                  Keamanan fisik dan logik dengan standar keamanan terkini, sehingga perangkat dan <br /> data yang dikelola terjaga keamanannya
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon-layanan">
              <div>
                <img src={Manage4} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="650">
          <Col lg="6" className='d-flex justify-content-center align-items-center'>
            <div className="card-icon">
              <div>
                <img src={Manage5} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-main">
              <div>
                <h4>Kualitas perangkat yang memadai</h4>
                <p>sehingga operasional TI Klien menjadi lebih cepat</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ManagePage