import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import ProfilBody from '../components/ProfileMenu'
import Footer from '../components/Footer'

export default class Profile extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <>
        <Navbar />
          <ProfilBody />
        <Footer />
      </>
    )
  }
}
