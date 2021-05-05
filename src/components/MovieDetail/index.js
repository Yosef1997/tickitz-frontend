import React, { Component } from 'react'
import './MovieDetail.css'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import Spiderman from '../../assets/spiderman.jpg'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="detail">
        <Row className="mt-5">
          <Col lg={4} className="detailCol1">
            <div className="detailImg">
              <img src={Spiderman} alt="..." />
            </div>
          </Col>
          <Col lg={8} className="detailCol2">
            <div className="detail1">
              <div className="detailTitle">Spiderman</div>
              <div className="detailGenre">Action,Sci-fi</div>
            </div>
            <div className="detail2">
              <div className="w-50">
                <div className="detailSubTitle">Release date</div>
                <div className="detailText">{moment('2021-05-25').format('MMMM DD, YYYY')}</div>
              </div>
              <div className="w-50">
                <div className="detailSubTitle">Directed by</div>
                <div className="detailText">Madun</div>
              </div>
            </div>
            <div className="detail2">
              <div className="w-50">
                <div className="detailSubTitle">Duration</div>
                <div className="detailText">1h 30m</div>
              </div>
              <div className="w-50">
                <div className="detailSubTitle">Casts</div>
                <div className="detailText">balbakldlf,adfwef</div>
              </div>
            </div>
            <hr />
            <div className="Synopsis">
              <div className="detailSynopsis">Synopsis</div>
              <div className="synopsisText">mantap</div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
