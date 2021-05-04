import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Detail from '../components/MovieDetail'
import Footer from '../components/Footer'

export default class Movie extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Detail />
        <Footer />
        <Link to="/movie/seat">
        movie detail
        </Link>
      </div>
    )
  }
}
