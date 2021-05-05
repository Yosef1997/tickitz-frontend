import React, { Component } from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

export default class Payment extends Component {
  render () {
    return (
      <>
        <Navbar />

        <Footer />

        <Link to="/movie/seat/payment/ticket">
          payment
        </Link>
      </>
    )
  }
}
