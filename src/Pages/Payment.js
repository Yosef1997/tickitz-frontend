import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Payment extends Component {
  render () {
    return (
      <div>
        <Link to="/movie/seat/payment/ticket">
          payment
        </Link>
      </div>
    )
  }
}
