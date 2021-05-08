import React, { Component } from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

export default class ViewAll extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
        <Navbar />

        <Footer />
        View All
      </>
    )
  }
}
