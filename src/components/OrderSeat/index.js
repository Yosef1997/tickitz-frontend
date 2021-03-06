import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './OrderSeat.css'
import RowSeat from '../../assets/forwardarrow.png'
import ColumnSeat from '../../assets/rightarrow.png'
import OrderInfo from '../OrderInfo'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { seatOrder, allSoldSeat } from '../../Redux/Action/order'

class index extends Component {
  state = {
    seatSold: [],
    selectedSeat: [],
    price: 0
  }
  getSeatSold = async () => {
    const { detailMovie, detailDate, detailLocation, detailTime, detailCinema } = this.props.order
    const { token } = this.props.auth
    await this.props.allSoldSeat(token, detailMovie.name, detailDate.date, detailLocation.name, detailTime.time, detailCinema.name)
  }
  handleCheckOut = async () => {
    await this.props.seatOrder(this.state.selectedSeat, this.state.price)
    this.props.history.push('/movie/seat/payment')
  }
  handleClickChooseSeat = (event) => {
    const { selectedSeat, price } = this.state
    const priceMovie = 10
    this.setState({ selectedSeat: [...selectedSeat, event.target.id] })

    if (event.target.id && event.target.checked === false) {
      const newData = selectedSeat.filter(seat => seat !== event.target.id)
      this.setState({ selectedSeat: newData })
      if (event.target.id.indexOf('F10') > -1) {
        const loveNest = priceMovie * 2
        this.setState({ price: price - loveNest })
      } else {
        this.setState({ price: price - priceMovie })
      }
    } else {
      this.setState({ selectedSeat: [...selectedSeat, event.target.id] })
      if (event.target.id.indexOf('F10') > -1) {
        const loveNest = priceMovie * 2
        this.setState({ price: price + loveNest })
      } else {
        this.setState({ price: price + priceMovie })
      }
    }
  }

  async componentDidMount () {
    await this.getSeatSold()
    this.setState({ seatSold: this.props.order.soldSeat })
  }

  render () {
    const { detailMovie } = this.props.order
    const { seatSold, selectedSeat, price } = this.state
    return (
      <Container fluid className='orderSeat'>
        <Row>
          <Col lg={8}>
            <div className='orderTitle orderWeb'>Movie Selected</div>
            <div className='orderDetailForm orderWeb'>
              <div className='orderMovie'>{detailMovie.name}</div>
              <Link to='/' className='orderChangeBtn'>Change movie</Link>
            </div>
            <div className='orderTitle'>Choose Your Seat</div>
            <div className='orderSeatForm'>
              <div className='orderScreenText d-sm-none'>Screen</div>
              <div className='orderScreenBar' />
              <Row className='orderSeatSequence'>
                <Col>
                  <Card className="border-0">
                    <Card.Body className="ml-auto">
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((row, idx) => {
                        return (
                          <Row key={idx}>
                            <div className="seat-layout column">{row}</div>
                            {[1, 2, 3, 4, 5, 6, 7].map((column, idx) => {
                              return (
                                <>
                                  {
                                    seatSold.indexOf(`${row}${column}`) > -1
                                      ? <input key={idx} type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className={'seat-layout btn-seat-layout btn-seat'} disabled />
                                      : <input key={idx} type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className={'seat-layout btn-seat-layout btn-seat'} />
                                  }
                                </>
                              )
                            })}
                          </Row>
                        )
                      })}
                      <Row className="gap-2">
                        <div className="seat-layout text-muted" />
                        {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => {
                          return (
                            <div key={idx} className="seat-layout badge text-muted column">{num}</div>
                          )
                        })}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="border-0">
                    <Card.Body>
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((row, idx) => {
                        return (
                          <Row key={idx}>
                            <div className="seat-layout text-center column d-lg-none">{row}</div>
                            {[8, 9, 10, 11, 12, 13, 14].filter(col => (row === 'F' && col !== 11) || row !== 'F').map(column => {
                              return (
                                <>
                                  {
                                    row === 'F' && column === 10
                                      ? <>
                                        {
                                          seatSold.indexOf(`${row}${column}`) > -1
                                            ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout_love-nest btn-seat-layout_love-nest btn-seat" style={{ width: 60 }} disabled />
                                            : <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout_love-nest btn-seat-layout_love-nest btn-seat" style={{ width: 60 }} />
                                        }
                                      </>
                                      : <>
                                        {
                                          seatSold.indexOf(`${row}${column}`) > -1
                                            ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout btn-seat-layout btn-seat" disabled />
                                            : <input type="checkbox" id={`${row}${column}`} onClick={(event) => this.handleClickChooseSeat(event)} className="seat-layout btn-seat-layout btn-seat" />
                                        }
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
                      <Row className="gap-2">
                        <div className="seat-layout text-muted d-lg-none" />
                        {[8, 9, 10, 11, 12, 13, 14].map((num, idx) => {
                          return (
                            <div key={idx} className="seat-layout badge text-muted column">{num}</div>
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
              <div className='orderLegendMobile mt-3'>
                <div>
                  <div className='orderLegendDetail mb-3'>
                    <div><img src={RowSeat} /></div>
                    <div className='seatLegend'>A - G</div>
                  </div>
                  <div className='orderLegendDetail mb-3'>
                    <div className='bg-gray-light' />
                    <div>Available</div>
                  </div>
                  <div className='orderLegendDetail'>
                    <div className='bg-theme' />
                    <div>Selected</div>
                  </div>
                </div>
                <div>
                  <div className='orderLegendDetail mb-3'>
                    <div><img src={ColumnSeat} /></div>
                    <div className='seatLegend'>1 - 14</div>
                  </div>
                  <div className='orderLegendDetail mb-3'>
                    <div className='bg-pink' />
                    <div>Love nest</div>
                  </div>
                  <div className='orderLegendDetail'>
                    <div className='bg-dark-ash' />
                    <div>Sold</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='orderSelectedSeatMobile'>
              <div className='orderSeatingKey'>Choosed</div>
              <div className='orderSeatingKey'>{selectedSeat.join(',')}</div>
            </div>
            <div className='orderFormBtn'>
              <Link to='/' className='orderChangeMovie'>Change your movie</Link>
              {price === 0
                ? <Button variant='secondary' className='orderCheckOut' disabled>Checkout now</Button>
                : <Button onClick={this.handleCheckOut} className='orderCheckOut' >Checkout now</Button>
              }
            </div>
          </Col>
          <Col lg={4}>
            <OrderInfo seat={selectedSeat.join(',')} price={price} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order
})

const mapDispatchToProps = { seatOrder, allSoldSeat }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
