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
        <Detail name='spiderman' genre='action' releaseDate='2021-04-19' director='gua' duration='1h 50m' starts='madun' description='check' />
        <Footer />
        <Link to="/movie/seat">
        movie detail
        </Link>
      </div>
    )
  }
}
