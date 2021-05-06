import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import OrderSeat from '../components/OrderSeat'

import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

export default class Seat extends Component {
  render () {
    return (
      <>
        <Navbar />
        <Row>
          <Col lg={8}>
            <OrderSeat />
          </Col>
        </Row>
        <Footer />
        <Link to="/movie/seat/payment">
          seat order
        </Link>
      </>
    )
  }
}
