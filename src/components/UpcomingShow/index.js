import React, { Component } from 'react'
import './UpcomingShow.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BtnMonth from '../BtnMonth'
import { connect } from 'react-redux'
import { allMovie, detailMovie } from '../../Redux/Action/movie'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  async componentDidMount () {
    await this.props.allMovie()
  }

  render () {
    const { allMovie } = this.props.movie

    return (
      <Container fluid className="Upcoming">
        <Row className="Upcoming-row1">
          <Col className="Upcoming-col1">
            <p className="Upcoming-textLeft">Upcoming Movies</p>
          </Col>
          <Col className="Upcoming-col2">
            <Link to="/viewall">
              <p className="Upcoming-textRight">View All</p>
            </Link>
          </Col>
        </Row>
        <Row className="Upcoming-month">
          <BtnMonth />
        </Row>
        <Row>
          <Col className="Upcoming-col3">
            {allMovie.map((item, idx) => {
              return (
                <>
            <div key={idx} className="Upcoming-card">
              <img src={`${URL}/upload/movie/${item.picture}`} alt='...' className="Upcoming-img" />
              <div className="upcomingCardTitle">Black Widow</div>
              <div className="upcomingCardGenre">Action, Adventure, Sci-Fi</div>
              <Link to='/movie'><div className="upcomingCardBtn">Details</div></Link>
            </div>
                </>
              )
            })}
          </Col>
        </Row>

      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie
})

const mapDispatchToProps = { allMovie, detailMovie }

export default connect(mapStateToProps, mapDispatchToProps)(index)
