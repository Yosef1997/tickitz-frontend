import React, { Component } from 'react'
import './UpcomingShow.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spiderman2 from '../../assets/Rectangle119spiderman.png'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="Upcoming">
        <Row className="Upcoming-row1">
          <Col className="Upcoming-col1">
            <p className="Upcoming-textLeft">Upcoming Movies</p>
          </Col>
          <Col className="Upcoming-col2">
            <Link>
              <p className="Upcoming-textRight">View All</p>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="Upcoming-col3">
            <div className="Upcoming-card">
              <img src={Spiderman2} alt='...' className="Upcoming-img" />
              <div className="upcomingCardTitle">Black Widow</div>
              <div className="upcomingCardGenre">Action, Adventure, Sci-Fi</div>
              <Link><div className="upcomingCardBtn">Details</div></Link>
            </div>
          </Col>
        </Row>

      </Container>
    )
  }
}
