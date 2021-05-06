import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import OrderSeat from '../components/OrderSeat'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

export default class Seat extends Component {
  render () {
    return (
      <>
        <Navbar />
        <OrderSeat />
        <Footer />
        <Link to="/movie/seat/payment">
          seat order
        </Link>
      </>
    )
  }
}
