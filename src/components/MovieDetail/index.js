import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
// import Spiderman from '../../assets/Rectanglespiderman.jpg'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="detail">
        <Row className="mt-5">
          <Col md={4} className="detailCol1">
            <div>
              <img src={this.props.src} className="detailImg" alt="..." />
            </div>
          </Col>
          <Col md={8} className="detailCol2">
            <div className="detail1 d-flex flex-column justify-content-start">
              <h3>{this.props.name}</h3>
              <p>{this.props.genre}</p>
            </div>
            <div className="detail2 d-flex flex">
              <div className="w-50">
                <p className="w-50">Release date</p>
                <h5 className="w-50">{moment(this.props.releaseDate).format('MMM DD, YYYY')}</h5>
              </div>
              <div className="w-50">
                <p className="w-50">Directed by</p>
                <h5 className="w-50">{this.props.director}</h5>
              </div>
            </div>
            <div className="detail2  d-flex flex">
              <div className="w-50">
                <p className="w-50">Duration</p>
                <h5 className="w-50">{this.props.duration}</h5>
              </div>
              <div className="w-50">
                <p className="w-50">Casts</p>
                <h5 className="w-100">{this.props.stars}</h5>
              </div>
            </div>
            <hr />
            <div className="Synopsis">
              <h3>Synopsis</h3>
              <p>{this.props.description}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
