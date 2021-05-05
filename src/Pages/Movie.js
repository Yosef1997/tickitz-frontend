import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Detail from '../components/MovieDetail'
import DropdownDate from '../components/BtnDateDropDown'
import DropdownLocation from '../components/BtnLocationDropDown'
import Footer from '../components/Footer'

export default class Movie extends Component {
  render () {
    return (
      <>
        <Navbar />
        <Detail />
        <DropdownDate />
        <DropdownLocation />
        <Footer />
        <Link to="/movie/seat">
        movie detail
        </Link>
      </>
    )
  }
}
