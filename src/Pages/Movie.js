import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Detail from '../components/MovieDetail'
import Dropdown from '../components/BtnDropdown'
import Footer from '../components/Footer'

export default class Movie extends Component {
  render () {
    return (
      <>
        <Navbar />
        <Detail />
        <Dropdown placeholder='Set a date' />
        <Footer />
        <Link to="/movie/seat">
        movie detail
        </Link>
      </>
    )
  }
}
