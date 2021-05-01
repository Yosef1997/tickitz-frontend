import React, { Component } from 'react'
import './NowShowing.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spiderman2 from '../../assets/Rectangle119spiderman.png'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="nowShow">
        <Row className="nowShow-row1">
          <Col className="nowShow-col1">
            <p className="nowShow-textLeft">Now Showing</p>
          </Col>
          <Col className="nowShow-col2">
            <Link>
              <p className="nowShow-textRight">View All</p>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="nowShow-col3">
            <div className="nowShow-card">
              <Link>
                <img src={Spiderman2} alt='...' className="nowShow-img" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
