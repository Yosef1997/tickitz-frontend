import React from 'react'
import Select from 'react-select'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import Calender from '../../assets/calender-icon.png'
import Location from '../../assets/location.png'
import './ShowTime.css'
import Cinema from '../CinemaCard'
import { connect } from 'react-redux'
import {
  allDate,
  detailDate,
  allLocation,
  detailLocation
} from '../../Redux/Action/showTime'

class index extends React.Component {
  state = {
    dataDate: [],
    dataLocation: [],
    date: '',
    location: '',
    isLoading: false
  };

  async componentDidMount () {
    const { token } = this.props.auth
    await this.props.allDate(token)
    await this.props.allLocation(token)
    const date = this.props.movie.allDate.map(item => ({
      value: item.id,
      label: moment(item.date).format('DD/MM/YY')
    }))
    const location = this.props.movie.allLocation.map(item => ({
      value: item.id,
      label: item.name
    }))
    this.setState({
      dataDate: date,
      dataLocation: location
    })
  }

  handleDate = async (date) => {
    const { token } = this.props.auth
    await this.props.detailDate(token, date.value)
    this.setState({ date })
  };
  handleLocation = async (location) => {
    this.setState({ isLoading: true })
    const { token } = this.props.auth
    await this.props.detailLocation(token, location.value)
    this.setState({ location })
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  };
  render () {
    const { date, location, dataDate, dataLocation, isLoading } = this.state

    return (
      <Container fluid className='showTime'>
        <Row>
          <Col>
            <div className='showTimeTitle'>Showtimes and Tickets</div>
          </Col>
        </Row>
        <Row className='showTimeBtn'>
          <div className='dropDown'>
            <img src={Calender} />
            <Select
              className='dropDownInput'
              placeholder='Set a date'
              value={date}
              onChange={this.handleDate}
              options={dataDate}
            />
          </div>
          <div className='dropDown'>
            <img src={Location} />
            <Select
              className='dropDownInput'
              placeholder='Set a city'
              value={location}
              onChange={this.handleLocation}
              options={dataLocation}
            />
          </div>
        </Row>
        <Row>
          <Col className='showTimeCinema'>
            {date === '' || location === ''
              ? (<div className='showTimeCinemaText'>Please set a date and a location</div>)
              : (
                <>
                {isLoading === true ? (<div className='d-flex justify-content-center mt-5'><Spinner animation="border" variant="dark" /></div>) : (<Cinema />)}
                </>
                )}

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

const mapDispatchToProps = {
  allDate,
  detailDate,
  allLocation,
  detailLocation
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
