import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Detail from '../components/MovieDetail'
import ShowTime from '../components/ShowTime'
import Cinema from '../components/CinemaCard'
import Footer from '../components/Footer'

export default class Movie extends Component {
  render () {
    return (
      <>
        <Navbar />
        <Detail />
        <ShowTime />
        <Cinema />
        <Footer />
        <Link to="/movie/seat">
        movie detail
        </Link>
      </>
    )
  }
}
