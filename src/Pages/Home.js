import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default class Home extends Component {
  render () {
    return (
      <>
        <Navbar />
        <Hero />
        <Footer />
      </>
    )
  }
}
