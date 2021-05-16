import React, { Component } from 'react'
import './UpcomingShow.css'
import { Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import BtnMonth from '../BtnMonth'
import { connect } from 'react-redux'
import { searchMovie, detailMovie } from '../../Redux/Action/movie'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  handleMovie = async (id) => {
    console.log(id, 'Upcoming Movie')
    const { token } = this.props.auth
    await this.props.detailMovie(token, id)
    this.props.history.push('/movie')
  }
  handleViewAll = async () => {
    const { token } = this.props.auth
    await this.props.searchMovie(token, '', 'name')
    this.props.history.push('viewall')
  }
  render () {
    const { allMovieByMonth } = this.props.movie
    return (
      <Container fluid className="Upcoming">
        <Row className="Upcoming-row1">
          <Col className="Upcoming-col1">
            <p className="Upcoming-textLeft">Upcoming Movies</p>
          </Col>
          <Col className="Upcoming-col2">
            <div onClick={this.handleViewAll}>
              <p className="Upcoming-textRight">View All</p>
            </div>
          </Col>
        </Row>
        <Row className="Upcoming-month">
          <BtnMonth />
        </Row>
        <Row>
          {allMovieByMonth === null
            ? <Col>
              <div className="Upcoming-textLeft">Movie Not Found</div>
            </Col>
            : <Col className="Upcoming-col3">
              {allMovieByMonth.map((item) => {
                return (
                  <>
                    <div key={item.id} className="Upcoming-card">
                      <img src={`${URL}/upload/movie/${item.picture}`} alt='...' className="Upcoming-img" />
                      <div className="upcomingCardTitle">Black Widow</div>
                      <div className="upcomingCardGenre">Action, Adventure, Sci-Fi</div>
                      <div onClick={() => this.handleMovie(item.id)} className="upcomingCardBtn">Details</div>
                    </div>
                  </>
                )
              })}
            </Col>

          }
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie
})

const mapDispatchToProps = { searchMovie, detailMovie }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
