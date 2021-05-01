import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NowShow from '../components/NowShowing'
import Upcoming from '../components/UpcomingShow'
import Footer from '../components/Footer'

export default class Home extends Component {
  render () {
    return (
      <>
        <Navbar />
        <Hero />
        <NowShow />
        <Upcoming />
        <Footer />
      </>
    )
  }
}
