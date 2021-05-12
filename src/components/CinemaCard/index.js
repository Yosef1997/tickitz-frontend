import React, { Component } from 'react'
import './Cinema.css'
import { Container, Row, Col, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { detailCinema, detailTime } from '../../Redux/Action/showTime'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  state = {
    radios: [],
    checked: false,
    radioValue: ''
  }
  async componentDidMount () {
    const time = this.props.movie.allTime.map(item => ({
      name: item.time,
      value: String(item.id)
    }))
    this.setState({ radios: time })
  }

  handleTime = async (event) => {
    const { token } = this.props.auth
    await this.props.detailTime(token, event.target.value)
    this.setState({ radioValue: event.target.value })
    console.log(this.state.radioValue)
  }
  handleCinema = async (id) => {
    const { token } = this.props.auth
    await this.props.detailCinema(token, id)
    this.props.history.push('/movie/seat/')
  }
  render () {
    const { radios, radioValue } = this.state
    const { allCinema } = this.props.movie

    return (
      <Container fluid className='cinema'>
        <Row>
          {allCinema.map((item) => {
            return (
              <>
                <Col key={item.id} lg={4}>
                  <div className='cinemaCard'>
                    <div className='cinemaHeader'>
                      <img src={`${URL}/upload/cinema/${item.picture}`} alt='...' className="cinemaImg" />
                      <div>
                        <div className='cinemaName'>{item.name}</div>
                        <div className='cinemaAddress'>{item.address}</div>
                      </div>
                    </div>
                    <div className='cinemaTime'>
                      {radios.map((radio, idx) => (
                        <ButtonGroup toggle key={idx}>
                          <ToggleButton
                            type="checkbox"
                            variant="light"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={this.handleTime}
                            className='cinemaTimeBtn'
                          >
                            {radio.name}
                          </ToggleButton>
                        </ButtonGroup>
                      ))}
                    </div>
                    <div className="cinemaPrice">
                      <div className="cinemaPriceText">Price</div>
                      <div className="cinemaPriceTotal">{`$${item.price}.00/seat`}</div>
                    </div>
                    <div className="cinemaBtnForm">
                      {radioValue === ''
                        ? (<Button variant='secondary' disabled className="cinemaBookBtn">Book now</Button>
                          )
                        : (<Button onClick={() => this.handleCinema(item.id)} className="cinemaBookBtn">Book now</Button>
                          )}
                      <Button className="cinemaCartBtn">Add to cart</Button>
                    </div>
                  </div>
                </Col>
              </>
            )
          })}
        </Row>

        <Row>
          <Col className='text-center'>
            <Button onClick className="cinemaViewMore">view more</Button>
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
const mapDispatchToProps = { detailCinema, detailTime }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
