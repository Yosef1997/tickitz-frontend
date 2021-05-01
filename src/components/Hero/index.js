import React, { Component } from 'react'
import './Hero.css'
import { Row, Col, Container } from 'react-bootstrap'

import Spiderman from '../../assets/Rectanglespiderman.jpg'
import Lion from '../../assets/Rectanglelion.jpg'
import Starwars from '../../assets/RectangleStarwars.jpg'

export default class index extends Component {
  render () {
    return (
      <Container fluid className='my-5'>
        <Row>
          <Col lg className="m-auto">
            <p className='hero-text'>Nearest Cinema, Newest Movie,</p>
            <p className='hero-title'>Find out now!</p>
          </Col>
          <Col lg className="hero-col2">
            <img src={Spiderman} className='pict1' alt="..." />
            <img src={Lion} className='pict2 mx-3' alt="..." />
            <img src={Starwars} className='pict3' alt="..." />
          </Col>
        </Row>
      </Container>
    )
  }
}
