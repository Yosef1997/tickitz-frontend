import React from 'react'
import Select from 'react-select'
import { Container, Row, Col } from 'react-bootstrap'
import Calender from '../../assets/calender-icon.png'
import Location from '../../assets/location.png'
import './DropDown.css'

class index extends React.Component {
  state = {
    dataDate: [
      { value: '1', label: '2021-04-21' },
      { value: '2', label: '2021-04-22' }
    ],
    dataLocation: [
      { value: '1', label: 'Jakarta Utara' },
      { value: '2', label: 'Jakarta Pusat' }
    ],
    date: '',
    location: ''
  };
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

export default index
