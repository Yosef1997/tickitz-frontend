import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Detail from '../components/MovieDetail'
import ShowTime from '../components/ShowTime'
import Footer from '../components/Footer'

export default class Movie extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
        <Navbar />
        <Detail />
        <ShowTime />
        <Footer />
      </>
    )
  }
}
