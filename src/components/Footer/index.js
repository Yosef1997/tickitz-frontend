import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'
import Brand from '../../assets/tickitzpurple.png'
import Ebv from '../../assets/ebv.jpg'
import Cineone21 from '../../assets/cineone210.jpg'
import Hiflix from '../../assets/hiflix.jpg'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/ig-vector.png'
import Twitter from '../../assets/twitter.png'
import Facebook from '../../assets/facebook.png'

class Footer extends Component {
  render () {
    return (
      <Container fluid className="footer">
        <Row>
          <Col lg={4} className="footer-col1">
            <img src={Brand} alt="..." className="footer-img" />
            <p className="mt-3 text-left">Stop waiting in line. Buy tickets <br></br> conveniently, watch movies quietly.</p>
          </Col>
          <Col lg={2} className="footer-col2">
            <p>Explore</p>
            <Link to="#">Cinemas</Link>
            <Link to="#">Movies List</Link>
            <Link to="#">Notification</Link><br></br>
            <Link to="#">My Ticket</Link>
          </Col>
          <Col lg={3} className="footer-col3">
            <p>Our Sponsor</p>
            <Link to="#"><img src={Ebv} alt="..." className="img2-footer" /></Link>
            <Link to="#"><img src={Cineone21} alt="..." className="img2-footer" /></Link>
            <Link to="#"><img src={Hiflix} alt="..." className="img2-footer" /></Link>
          </Col>
          <Col lg={3} className="footer-col4">
            <p>Follow Us</p>
            <Link to="#">
              <img src={Facebook} alt="..." />
              <div className="mobile">Tickitz Cinema id</div>
            </Link>
            <Link to="#">
              <img src={Instagram} alt="..." />
              <div className="mobile">
                tickitz.id
                </div>
            </Link>
            <Link to="#">
              <img src={Twitter} alt="..." />
              <div className="mobile">
                tickitz.id
                </div>
            </Link>
            <Link to="#">
              <img src={Youtube} alt="..." />
              <div className="mobile">Tickitz Cinema id</div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="col5 my-5">
            <p>© 2020 Tickitz. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
