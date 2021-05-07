import React, { Component } from 'react'
import './Ticket.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/tickitzwhite.png'
import Barcode from '../../assets/QRBarcode.png'
import Download from '../../assets/download-icon.png'
import Print from '../../assets/print.png'

export default class index extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col className='ticket'>
            <div className='ticketPaper'>
              <div className='ticketTitle'>Proof of Payment</div>
              <div className='ticketCircle' />
              <div className='d-flex mt-5'>
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
                  <div className='ticketBodyText'>Spider-Man: Homecoming</div>
                  <Row className='mt-3'>
                    <Col>
                      <div className='ticketBodyDetail'>Date</div>
                      <div className='ticketBodyText'>07 July</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Time</div>
                      <div className='ticketBodyText'>02:00pm</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Category</div>
                      <div className='ticketBodyText'>PG-13</div>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col>
                      <div className='ticketBodyDetail'>Count</div>
                      <div className='ticketBodyText'>{`${3} pieces`}</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Seats</div>
                      <div className='ticketBodyText'>02:00pm</div>
                    </Col>
                    <Col>
                      <div className='ticketBodyDetail'>Price</div>
                      <div className='ticketBodyTotal'>{`$${'30'}.00`}</div>
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
          </Col>
        </Row>
      </Container>
    )
  }
}
