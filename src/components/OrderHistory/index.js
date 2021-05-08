import React, { Component } from 'react'
import './History.css'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/cineone210.jpg'

export default class index extends Component {
  render () {
    return (
      <Container fluid>
        {[...Array(2)].map((item, idx) => {
          return (
            <>
              <Row className='orderHistory'>
                <Col>
                  <div className='orderHistoryForm'>
                    <div className='my-5'>
                      <div className='orderHistorySchedule'>Tuesday, 07 July 2020 - 04:30pm</div>
                      <div className='orderHistoryMovie'>Spider-Man: Homecoming</div>
                    </div>
                    <img src={Logo} className='orderHistoryImg' />
                  </div>
                  <div className='orderHistoryForm my-4 border-0'>
                    <Button className='orderHistoryBtn'>Ticket in active</Button>
                    <Link className='orderHistoryDetail'>Show Details</Link>
                  </div>
                </Col>
              </Row>
            </>
          )
        })}
      </Container>
    )
  }
}
