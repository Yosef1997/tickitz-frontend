import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import OrderSeat from '../components/OrderSeat'
import Footer from '../components/Footer'

export default class Seat extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
        <Navbar />
        <OrderSeat />
        <Footer />
      </>
    )
  }
}
