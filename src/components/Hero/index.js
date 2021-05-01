import React, { Component } from 'react'
import './Hero.css'
import { Row, Col } from 'react-bootstrap'

import Spiderman from '../../assets/Rectanglespiderman.jpg'
import Lion from '../../assets/Rectanglelion.jpg'
import Starwars from '../../assets/RectangleStarwars.jpg'

export default class index extends Component {
  render () {
    return (
      <>
        <Row className="bgwhite p-5">
          <Col md className="home-col1">
            <p className="p1">Nearest Cinema, Newest Movie,</p>
            <h1>Find out now!</h1>
          </Col>
          <Col md className="home-col2">
            <img src={Spiderman} className="pt-5 mr-3" alt="..." />
            <img src={Lion} className="pt-3 mt-1 mr-3" alt="..." />
            <img src={Starwars} className="pt-0" alt="..." />
          </Col>
        </Row>
      </>
    )
  }
}
