import React, { Component } from 'react'
import './Ticket.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Mobile from './mobile'
import { connect } from 'react-redux'
import Logo from '../../assets/tickitzwhite.png'
import Barcode from '../../assets/QRBarcode.png'
import Download from '../../assets/download-icon.png'
import Print from '../../assets/print.png'

class index extends Component {
  render () {
    const [purchase] = this.props.order.purchase
    const { seatOrder } = this.props.order
    return (
      <Container fluid>
        <Row>
          <Col className='ticket'>
            <div className='ticketPaper'>
              <div className='ticketTitle'>Proof of Payment</div>
              <div className='ticketCircle1' />
              <div className='ticketCircle2' />
              <div className='d-flex'>
                <div className='ticketHeaderLeft'>
                  <img src={Logo} className='ticketLogo' />
                  <div className='ticketHeaderText'>Admit One</div>
                </div>
                <div className='ticketHeaderRight'>
                  <img src={Logo} className='ticketLogo' />
                </div>
              </div>
              <div className='d-flex mb-5'>
                <div className='ticketBodyLeft'>
                  <div className='ticketBodyDetail'>Movie</div>
                  <div className='ticketBodyText'>{purchase.movie}</div>
                  <Row className='mt-3'>
                    <Col>
                      <div className='ticketBodyDetail'>Date</div>
                      <div className='ticketBodyText'>{moment(purchase.date).format('DD MMMM')}</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Time</div>
                      <div className='ticketBodyText'>{purchase.time}</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Category</div>
                      <div className='ticketBodyText'>PG-13</div>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col>
                      <div className='ticketBodyDetail'>Count</div>
                      <div className='ticketBodyText'>{`${purchase.seat.length} pieces`}</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Seats</div>
                      <div className='ticketBodyText'>{purchase.seat.join(',')}</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Price</div>
                      <div className='ticketBodyTotal'>{`$${seatOrder.price}.00`}</div>
                    </Col>
                  </Row>
                </div>
                <div className='ticketBodyRight'>
                  <div className='ticketBarcode'>
                  <img src={Barcode} />
                  </div>
                </div>
              </div>

              <div className='ticketBtnForm'>
                <Link className='ticketBtn'>
                  <img src={Download} className='mr-3' />
                Download
               </Link>
                <div className='mx-2' />
                <Link className='ticketBtn'>
                  <img src={Print} className='mr-3' />
                Print
              </Link>
              </div>
            </div>
            <Mobile className='ticketPaperMobile' />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order
})

export default connect(mapStateToProps)(index)
