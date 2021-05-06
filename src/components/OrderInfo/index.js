import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './OrderInfo.css'
import Cinema from '../../assets/cineone210.jpg'

export default class index extends Component {
  render () {
    return (
      <Container fluid className='orderInfo'>
        <Row>
          <Col>
            <div className='orderTitle orderWeb'>Order Info</div>
            <div className='orderInfoForm orderWeb'>
              <div className='text-center mb-4'>
                <img src={Cinema} className='orderInfoImg' />
                <div className='orderInfoCinema'>{`${'CineOne21'} Cinema`}</div>
              </div>
              <div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>Movie selected</div>
                  <div className='orderInfo2'>Spider-Man: Homecoming</div>
                </div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>Tuesday, 07 July 2020</div>
                  <div className='orderInfo2'>02:00pm</div>
                </div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>One ticket price</div>
                  <div className='orderInfo2'>$10</div>
                </div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>Seat choosed</div>
                  <div className='orderInfo2'>C4, C5, C6</div>
                </div>
              </div>
              <div>
                <div className='orderInfoDetail'>
                  <div className='orderInfoTotal'>Total Payment</div>
                  <div className='orderInfoPrice'>{this.props.price}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
