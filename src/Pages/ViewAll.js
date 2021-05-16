import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import ViewAllBody from '../components/ViewAll'
import Footer from '../components/Footer'

export default class ViewAll extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
        <Navbar />
        <ViewAllBody />
        <Footer />
      </>
    )
  }
}
