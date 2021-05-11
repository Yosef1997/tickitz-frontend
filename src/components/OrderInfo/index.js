import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './OrderInfo.css'
import moment from 'moment'
import { connect } from 'react-redux'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  render () {
    const { detailMovie, detailDate, detailTime, detailCinema } = this.props.order
    return (
      <Container fluid className='orderInfo'>
        <Row>
          <Col>
            <div className='orderTitle orderWeb'>Order Info</div>
            <div className='orderInfoForm orderWeb'>
              <div className='text-center mb-4'>
                <img src={`${URL}/upload/cinema/${detailCinema.picture}`} className='orderInfoImg' />
                <div className='orderInfoCinema'>{`${detailCinema.name} Cinema`}</div>
              </div>
              <div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>Movie selected</div>
                  <div className='orderInfo2'>{detailMovie.name}</div>
                </div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>{moment(detailDate.date).format('dddd, DD MMMM YYYY')}</div>
                  <div className='orderInfo2'>{detailTime.time}</div>
                </div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>One ticket price</div>
                  <div className='orderInfo2'>$10</div>
                </div>
                <div className='orderInfoDetail'>
                  <div className='orderInfo1'>Seat choosed</div>
                  <div className='orderInfo2'>{this.props.seat}</div>
                </div>
              </div>
              <div>
                <div className='orderInfoDetail'>
                  <div className='orderInfoTotal'>Total Payment</div>
                  <div className='orderInfoPrice'>{this.props.price}</div>
                </div>
              </div>
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
export default connect(mapStateToProps)(index)
