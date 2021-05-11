import React from 'react'
import Select from 'react-select'
import { Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import Calender from '../../assets/calender-icon.png'
import Location from '../../assets/location.png'
import './ShowTime.css'
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
    location: ''
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

  handleDate = date => {
    this.setState({ date })
    console.log('idDate:', date.value)
  };
  handleLocation = location => {
    this.setState({ location })
    console.log('idLocation:', location.value)
  };
  render () {
    const { date, location, dataDate, dataLocation } = this.state

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
