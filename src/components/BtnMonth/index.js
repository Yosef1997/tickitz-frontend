import React, { Component } from 'react'
import './BtnMonth.css'
import { Col, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import { allMovieByMonth } from '../../Redux/Action/movie'

class BtnMonth extends Component {
  state = {
    checked: false,
    radioValue: `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`,
    month: [
      { name: 'January', value: '2021-01' },
      { name: 'February', value: '2021-02' },
      { name: 'March', value: '2021-03' },
      { name: 'April', value: '2021-04' },
      { name: 'May', value: '2021-05' },
      { name: 'June', value: '2021-06' },
      { name: 'July', value: '2021-07' },
      { name: 'August', value: '2021-08' },
      { name: 'September', value: '2021-09' },
      { name: 'October', value: '2021-10' },
      { name: 'November', value: '2021-11' },
      { name: 'December', value: '2021-12' }
    ]
  }

  handleMonth = async (event) => {
    this.setState({ radioValue: event.target.value })
    const { token } = this.props.auth
    await this.props.allMovieByMonth(token, event.target.value)
  }

  async componentDidMount () {
    const { token } = this.props.auth
    const { radioValue } = this.state
    await this.props.allMovieByMonth(token, radioValue)
  }

  render () {
    const { month, radioValue } = this.state
    return (
      <Col className="colMonth">
        {month.map((month, idx) => {
          return (
            <>
            <ButtonGroup toggle>
              <ToggleButton
                key={idx}
                type="radio"
                className="btnMonth"
                name="month"
                value={month.value}
                checked={radioValue === month.value}
                onChange={this.handleMonth}
              >
                {month.name}
              </ToggleButton>
            </ButtonGroup>
            </>
          )
        })}

      </Col>
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = { allMovieByMonth }
export default connect(mapStateToProps, mapDispatchToProps)(BtnMonth)
