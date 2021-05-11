import React, { Component } from 'react'
import './MovieDetail.css'
import { Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  render () {
    const { detailMovie } = this.props.order

    return (
      <Container fluid className="detail">
        <Row className="mt-5">
          <Col lg={4} className="detailCol1">
            <div className="detailImg">
              <img src={`${URL}/upload/movie/${detailMovie.picture}`} alt="..." />
            </div>
          </Col>
          <Col lg={8} className="detailCol2">
            <div className="detail1">
              <div className="detailTitle">{detailMovie.name}</div>
              <div className="detailGenre">{detailMovie.genre.join(', ')}</div>
            </div>
            <div className="detail2">
              <div className="w-50">
                <div className="detailSubTitle">Release date</div>
                <div className="detailText">{moment(detailMovie.releaseDate).format('MMMM DD, YYYY')}</div>
              </div>
              <div className="w-50">
                <div className="detailSubTitle">Directed by</div>
                <div className="detailText">{detailMovie.director}</div>
              </div>
            </div>
            <div className="detail2">
              <div className="w-50">
                <div className="detailSubTitle">Duration</div>
                <div className="detailText">{detailMovie.duration}</div>
              </div>
              <div className="w-50">
                <div className="detailSubTitle">Casts</div>
                <div className="detailText">{detailMovie.star}</div>
              </div>
            </div>
            <hr />
            <div className="Synopsis">
              <div className="detailSynopsis">Synopsis</div>
              <div className="synopsisText">{detailMovie.description}</div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order
})

export default connect(mapStateToProps)(withRouter(index))
