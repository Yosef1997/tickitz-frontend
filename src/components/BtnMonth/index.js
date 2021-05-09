import React, { Component } from 'react'
import './BtnMonth.css'
import { Col, Button } from 'react-bootstrap'

export default class BtnMonth extends Component {
  state = {
    month: [
      { id: 1, name: 'January', date: '2021-01' },
      { id: 2, name: 'February', date: '2021-02' },
      { id: 3, name: 'March', date: '2021-03' },
      { id: 4, name: 'April', date: '2021-04' },
      { id: 5, name: 'May', date: '2021-05' },
      { id: 6, name: 'June', date: '2021-06' },
      { id: 7, name: 'July', date: '2021-07' },
      { id: 7, name: 'August', date: '2021-08' },
      { id: 7, name: 'September', date: '2021-09' },
      { id: 7, name: 'October', date: '2021-10' },
      { id: 7, name: 'November', date: '2021-11' },
      { id: 7, name: 'December', date: '2021-12' }
    ]
  }

  render () {
    const { month } = this.state
    return <Col className="colMonth">
      {month.map((month, idx) => {
        return (
          <div key={idx}>
            <Button className="btnMonth">{month.name}</Button>
          </div>
        )
      })}
    </Col>
  }
}
