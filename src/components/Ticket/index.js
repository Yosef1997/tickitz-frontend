import React, { Component } from 'react'
import './Ticket.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
              <Row>
                <Col></Col>
              </Row>
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
