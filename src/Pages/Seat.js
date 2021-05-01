import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Seat extends Component {
  render () {
    return (
      <div>
        <Link to="/movie/seat/payment">
        seat order
        </Link>
      </div>
    )
  }
}
