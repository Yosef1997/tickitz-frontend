import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  render () {
    return (
      <div>
        <Link to="/login">
          Register
        </Link>
      </div>
    )
  }
}
