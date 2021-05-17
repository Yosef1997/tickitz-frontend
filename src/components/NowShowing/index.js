import React, { Component } from 'react'
import './NowShowing.css'
import { Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { nowShow, searchMovie, detailMovie } from '../../Redux/Action/movie'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  async componentDidMount () {
    const { token } = this.props.auth
    await this.props.nowShow(token, `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`)
  }

  handleMovie = (id) => {
    const { token } = this.props.auth
    this.props.detailMovie(token, id)
    this.props.history.push('/movie')
  }

  handleViewAll = async () => {
    const { token } = this.props.auth
    await this.props.searchMovie(token, '', 'name')
    this.props.history.push('viewall')
  }

  render () {
    const { nowShow } = this.props.movie
    return (
      <Container fluid className="nowShow">
        <Row className="nowShow-row1">
          <Col className="nowShow-col1">
            <p className="nowShow-textLeft">Now Showing</p>
          </Col>
          <Col className="nowShow-col2">
            <div onClick={this.handleViewAll}>
              <p className="nowShow-textRight">View All</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="nowShow-col3">
            {nowShow.map((item) => {
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

const mapDispatchToProps = { nowShow, searchMovie, detailMovie }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
