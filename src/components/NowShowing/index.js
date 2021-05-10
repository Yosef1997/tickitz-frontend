import React, { Component } from 'react'
import './NowShowing.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
// import Spiderman2 from '../../assets/Rectangle119spiderman.png'
import { connect } from 'react-redux'
import { allMovie, detailMovie } from '../../Redux/Action/movie'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  async componentDidMount () {
    await this.props.allMovie()
  }

  handleMovie = (id) => {
    console.log(id, 'idMovie')
    const { token } = this.props.auth
    this.props.detailMovie(token, id)
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
            {allMovie.map((item) => {
              return (
                <>
                  <div key={item.id} onClick={() => this.handleMovie(item.id)} className="nowShow-card">
                    <img src={`${URL}/upload/movie/${item.picture}`} alt='...' className="nowShow-img" />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
