import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import SearchBody from '../components/Search'
import Footer from '../components/Footer'

export default class Search extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
      <Navbar />
      <SearchBody />
      <Footer />
      </>
    )
  }
}
