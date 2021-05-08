import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import PaymentInfo from '../components/PaymentInfo'
import Footer from '../components/Footer'

export default class Payment extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
        <Navbar />
        <PaymentInfo />
        <Footer />
      </>
    )
  }
}
