import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { cardLayanan, kamiTop, kamiBottom, partnerTop, partnerMiddle, partnerBottom, pengalaman } from '../data/index'
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import Kami3 from '../assets/image/kami3.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const HomePage = () => {

  let navigate = useNavigate()

  return (
    <div>
      <div className="hero" id="home">
        <Container>
          <Row>
            <Col lg="6">
              <div className="main">
                <h1 className='mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">Gemma Nusa Teknologi</h1>
                <p className='mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="950">
                  Dengan pengalaman serta pemahaman GNT terhadap industry Lembaga Keuangan, GNT hadir menyediakan layanan dengan konsep One Stop Solution dan Sharing Technology sehingga Klien dapat menikmati layanan teknologi terkini dengan harga yang lebih ekonomis dan lebih mudah karena dikelola oleh satu Vendor.
                </p>
                <div className="hero-link d-flex align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                  <span>Selengkapnya</span>
                  <i class='bx bx-chevron-right'></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="layanan" id="layanan">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Layanan</h1>
            </Col>
          </Row>
          <Row>
            {cardLayanan.map((data) => {
              return (
                <Col lg="6" key={data.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                  <div className="layanan-card">
                    <div className="layanan-icon">
                      <img src={data.image} alt="" />
                    </div>
                    <div className="layanan-main">
                      <h3>{data.title}</h3>
                      <p>{data.desc}</p>
                      <button onClick={() => navigate(`/${data.patch}`)}>Selengkapnya</button>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <div className="pengalaman" id="pengalaman">
        <div className="pengalaman-title">
          <h1 className='text-center fw-bold'>Pengalaman Gemma Nusa Teknologi</h1>
        </div>
        <div className="pengalaman-swiper">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {pengalaman.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className='pengalaman-card'>
                    <img src={data.image} alt="" className='w-100' />
                    <div className='background'></div>
                    <div className="pengalaman-wrapper d-flex justify-content-between align-items-center w-100">
                      <div className="pengalaman-main ">
                        <h4>{data.title}</h4>
                        <p>{data.desc}</p>
                      </div>
                      <button>Selengkapnya</button>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>

      <div className="kenapa-kami" id="kenapakami">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Kenapa Harus Memilih Kami</h1>
            </Col>
          </Row>
          <Row>
            <div className="kami-wrapper">
              <div className="kami-main">
                {kamiTop.map((data) => {
                  return (
                    <div className="kami-card" key={data.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                      <img src={data.image} alt="" />
                      <div className="kami-text">
                        <h4>{data.title}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Row>
          <Row>
            <div className="kami-wrapper-middle">
              <div className="kami-main-middle" >
                <div className="kami-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                  <img src={Kami3} alt="" />
                  <div className="kami-text">
                    <h4>Kerja Team Berpengalaman</h4>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="kami-wrapper-bottom">
              <div className="kami-main-bottom">
                {kamiBottom.map((data) => {
                  return (
                    <div className="kami-card" key={data.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                      <img src={data.image} alt="" />
                      <div className="kami-text">
                        <h4>{data.title}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <div class="join">
        <Container className='d-grid justfy-content-center'>
          <h1 className='text-center fw-bold'>Kenali, Gemma Nusa Teknologi Lebih Jauh</h1>

          <div className="join-btn text-center">
            <button>Gabung</button>
          </div>
        </Container>
      </div>

      <div className="partner" id="partner">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold mb-5'>Mitra Kebanggaan</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="partners-1">
                {partnerTop.map((data) => {
                  return (
                    <Link href="" key={data.id}>
                      <img src={data.image} alt="" />
                    </Link>
                  )
                })}
              </div>

              <div className="partners-2">
                {partnerMiddle.map((data) => {
                  return (
                    <Link href="" key={data.id}>
                      <img src={data.image} alt="" />
                    </Link>
                  )
                })}
              </div>

              <div className="partners-3">
                {partnerBottom.map((data) => {
                  return (
                    <Link href="" key={data.id}>
                      <img src={data.image} alt="" />
                    </Link>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage