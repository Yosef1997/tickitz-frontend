import React, { Component } from 'react'
import './Cinema.css'
import { Container, Row, Col, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import Logo from '../../assets/ebv.jpg'
import { withRouter } from 'react-router-dom'

class index extends Component {
  state = {
    radios: [
      { name: '9.30am', value: '1' },
      { name: '10.00am', value: '2' },
      { name: '11.00am', value: '3' },
      { name: '12.00pm', value: '4' },
      { name: '13.00pm', value: '5' }
    ],
    checked: false,
    radioValue: ''
  }
  handleTime = e => {
    this.setState({ radioValue: e.currentTarget.value })
    console.log('time', e.currentTarget.value)
  }
  handleCinema = () => {
    this.props.history.push('/movie/seat/')
  }
  render () {
    const { radios, radioValue } = this.state
    return (
      <Container fluid className='cinema'>
        <Row>
          <Col lg={4}>
            <div className='cinemaCard'>
              <div className='cinemaHeader'>
                <img src={Logo} alt='...' className="cinemaImg" />
                <div>
                  <div className='cinemaName'>ebv.id</div>
                  <div className='cinemaAddress'>Whatever street No.12, South Purwokerto</div>
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
                <div className="cinemaPriceTotal">$10.00/seat</div>
              </div>
              <div className="cinemaBtnForm">
                <Button onClick={() => this.handleCinema()} className="cinemaBookBtn">Book now</Button>
                <Button className="cinemaCartBtn">Add to cart</Button>
              </div>
            </div>
          </Col>
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
export default withRouter(index)