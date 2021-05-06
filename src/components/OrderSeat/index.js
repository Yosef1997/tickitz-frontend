import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './OrderSeat.css'
import { Link } from 'react-router-dom'

export default class index extends Component {
  render () {
    return (
      <Container fluid className='orderSeat'>
        <Row>
          <Col>
            <div className='orderTitle'>Movie Selected</div>
            <div className='orderDetailForm'>
              <div className='orderMovie'>Spider-Man: Homecoming</div>
              <Link to='/' className='orderChangeBtn'>Change movie</Link>
            </div>
            <div className='orderTitle'>Choose Your Seat</div>
            <div className='orderSeatForm'>
              <div className='orderScreenText'>Screen</div>
              <div className='orderScreenBar' />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
