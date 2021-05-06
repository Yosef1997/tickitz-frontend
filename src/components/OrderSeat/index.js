import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './OrderSeat.css'
import OrderInfo from '../OrderInfo'
import { Link, withRouter } from 'react-router-dom'

class index extends Component {
  state={
    seatSold: ['A5']
  }

  handleCheckOut =() => {
    this.props.history.push('/movie/seat/payment')
  }
  handleClickChooseSeat = (event) => {
    console.log(event.target.id)
    // if (event.target.id && event.target.checked === false) {
    //   const newData = seat.filter(seat => seat !== event.target.id)
    //   setSeat(newData)
    //   if (event.target.id.indexOf('F10') > -1) {
    //     const loveNest = priceMovie * 2
    //     setPrice(price - loveNest)
    //     dispatch(totalPayment(price - loveNest))
    //   } else {
    //     setPrice(price - priceMovie)
    //     dispatch(totalPayment(price - priceMovie))
    //   }
    // } else {
    //   setSeat([...seat, event.target.id])
    //   if (event.target.id.indexOf('F10') > -1) {
    //     const loveNest = priceMovie * 2
    //     setPrice(price + loveNest)
    //     dispatch(totalPayment(price + loveNest))
    //   } else {
    //     setPrice(price + priceMovie)
    //     dispatch(totalPayment(price + priceMovie))
    //   }
    // }
  }

  render () {
    // const { seatSold } = this.state
    return (
      <Container fluid className='orderSeat'>
        <Row>
          <Col lg={8}>
            <div className='orderTitle orderWeb'>Movie Selected</div>
            <div className='orderDetailForm orderWeb'>
              <div className='orderMovie'>Spider-Man: Homecoming</div>
              <Link to='/' className='orderChangeBtn'>Change movie</Link>
            </div>
            <div className='orderTitle'>Choose Your Seat</div>
            <div className='orderSeatForm'>
              <div className='orderScreenText'>Screen</div>
              <div className='orderScreenBar' />
              <Row>
                <Col sm={6}>
                <Card className="border-0">
                  <Card.Body className="ml-auto">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((row, idx) => {
                      return (
                        <Row key={idx}>
                          <div className="seat-layout">{row}</div>
                          {[1, 2, 3, 4, 5, 6, 7].map((column, idx) => {
                            return (
                              <input key={idx} type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className={'seat-layout btn-seat-layout btn-seat'} />
                              // <>
                              //   {
                              //     seatSold.split(',').indexOf(`${row}${column}`) > -1
                              //       ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className={'seat-layout btn-seat-layout btn-seat'} disabled />
                              //       : <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className={'seat-layout btn-seat-layout btn-seat'} />
                              //   }
                              // </>
                            )
                          })}
                        </Row>
                      )
                    })}
                    <Row className="gap-2 my-2">
                      <div className="seat-layout text-muted" />
                      {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => {
                        return (
                        <div key={idx} className="seat-layout badge text-muted">{num}</div>
                        )
                      })}
                    </Row>
                  </Card.Body>
                </Card>
                </Col>
                <Col lg={6}>
                <Card className="border-0">
                  <Card.Body>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((row, idx) => {
                      return (
                        <Row key={idx}>
                          <div className="seat-layout text-center d-lg-none">{row}</div>
                          {[8, 9, 10, 11, 12, 13, 14].filter(col => (row === 'F' && col !== 11) || row !== 'F').map(column => {
                            return (
                              <>
                                {
                                  row === 'F' && column === 10
                                    ? <>
                                    <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout_love-nest btn-seat-layout_love-nest btn-seat" style={{ width: 60 }} />
                                      {/* {
                                        seatSold.split(',').indexOf(`${row}${column}`) > -1
                                          ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout_love-nest btn-seat-layout_love-nest btn-seat bg-gray-light" style={{ width: 60 }} disabled />
                                          : <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout_love-nest btn-seat-layout_love-nest btn-seat bg-gray-light" style={{ width: 60 }} />
                                      } */}
                                    </>
                                    : <>
                                    <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout btn-seat-layout btn-seat" />
                                      {/* {
                                        seatSold.split(',').indexOf(`${row}${column}`) > -1
                                          ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout btn-seat-layout btn-seat bg-gray-light" disabled />
                                          : <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout btn-seat-layout btn-seat bg-gray-light" />
                                      } */}
                                    </>
                                }
                              </>
                            )
                          })
                          }
                        </Row>
                      )
                    })
                    }
                    <Row className="gap-2 my-2">
                      <div className="seat-layout text-muted d-lg-none" />
                      {[8, 9, 10, 11, 12, 13, 14].map((num, idx) => {
                        return (
                        <div key={idx} className="seat-layout badge text-muted">{num}</div>
                        )
                      })}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
              <div className='orderSeatingKey'>Seating key</div>
              <div className='orderLegend orderWeb'>
                <div className='orderLegendDetail'>
                  <div className='bg-gray-light' />
                  <div>Available</div>
                </div>
                <div className='orderLegendDetail'>
                  <div className='bg-theme' />
                  <div>Selected</div>
                </div>
                <div className='orderLegendDetail'>
                  <div className='bg-pink' />
                  <div>Love nest</div>
                </div>
                <div className='orderLegendDetail'>
                  <div className='bg-dark-ash' />
                  <div>Sold</div>
                </div>
              </div>
            </div>
            <div className='orderFormBtn'>
              <Link className='orderChangeMovie'>Change your movie</Link>
              <Button onClick={this.handleCheckOut} className='orderCheckOut'>Checkout now</Button>
            </div>
          </Col>
          <Col lg={4}>
            <OrderInfo />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(index)
