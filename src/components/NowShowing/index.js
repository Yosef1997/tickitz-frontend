import React, { Component } from 'react'
import './NowShowing.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Spiderman2 from '../../assets/Rectangle119spiderman.png'
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
      <Container fluid className="nowShow">
        <Row className="nowShow-row1">
          <Col className="nowShow-col1">
            <p className="nowShow-textLeft">Now Showing</p>
          </Col>
          <Col className="nowShow-col2">
            <Link to="/viewall">
              <p className="nowShow-textRight">View All</p>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="nowShow-col3">
          {allMovie.map((item, idx) => {
            return (
              <>
            <div key={idx} className="nowShow-card">
              <Link to="/movie">
                    <img src={`${URL}/upload/movie/${item.picture}`} alt='...' className="nowShow-img" />
              </Link>
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
