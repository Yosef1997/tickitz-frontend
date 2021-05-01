import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Movie extends Component {
  render () {
    return (
      <div>
        <Link to="/movie/seat">
        movie detail
        </Link>
      </div>
    )
  }
}
