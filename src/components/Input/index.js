import React, { Component } from 'react'
import './Input.css'
// import { Form } from 'react-bootstrap'

export default class index extends Component {
  render () {
    return (
      <div>
        <div className='labelInput'>{this.props.label}</div>
        <input type={this.props.type} onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder} className='input' />
      </div>
    )
  }
}
