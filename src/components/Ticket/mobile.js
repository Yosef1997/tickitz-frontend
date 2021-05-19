import React, { Component } from 'react'
import './Ticket.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Barcode from '../../assets/QRBarcode.png'
import moment from 'moment'
import { connect } from 'react-redux'

class mobile extends Component {
  render () {
    const [purchase] = this.props.order.purchase
    const { seatOrder } = this.props.order
    return (
      <Container fluid className='ticketPaperMobile'>
        <Row className='ticketMobileBarcode text-center'>
          <Col>
            <Image src={Barcode} fluid />
          </Col>
        </Row>
        <Row>
          <Col className='ticketMobile text-center'>
            <Row className='mb-4 '>
              <Col>
                <div className='ticketBodyDetail'>Movie</div>
                <div className='ticketBodyText'>{purchase.movie}</div>
              </Col>
              <Col>
                <div className='ticketBodyDetail'>Category</div>
                <div className='ticketBodyText'>PG-13</div>
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col>
                <div className='ticketBodyDetail'>Date</div>
                <div className='ticketBodyText'>{moment(purchase.date).format('DD MMMM')}</div>
              </Col>
              <Col>
                <div className='ticketBodyDetail'>Time</div>
                <div className='ticketBodyText'>{purchase.time}</div>
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col>
                <div className='ticketBodyDetail'>Count</div>
                <div className='ticketBodyText'>{`${purchase.seat.length} pieces`}</div>
              </Col>
              <Col>
                <div className='ticketBodyDetail'>Seats</div>
                <div className='ticketBodyText'>{purchase.seat.join(',')}</div>
              </Col>
            </Row>
            <Row>
              <Col className='ticketMobileTotal'>
                <div className='ticketBodyDetail'>Price</div>
                <div className='ticketBodyTotal'>{`$${seatOrder.price}.00`}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order
})

export default connect(mapStateToProps)(mobile)
