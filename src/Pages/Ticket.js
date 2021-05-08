import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import TicketPaper from '../components/Ticket'
import Footer from '../components/Footer'

export default class Ticket extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
      <Navbar />
      <TicketPaper />
      <Footer />
      </>
    )
  }
}
