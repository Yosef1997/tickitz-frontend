import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import TicketPaper from '../components/Ticket'
import Footer from '../components/Footer'

export default class Ticket extends Component {
  render () {
    return (
      <>
      <Navbar />
      <TicketPaper />
      <Footer />
        Ticket
      </>
    )
  }
}
