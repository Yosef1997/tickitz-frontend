import React, { Component } from 'react'
import './Input.css'
import { Form } from 'react-bootstrap'

export default class index extends Component {
  render () {
    return (
      <div>
        <Form.Label className='labelInput'>{this.props.label}</Form.Label>
        <div className='inputNumber'>
          <div className='countryCode'>+62</div>
          <input
          type={this.props.type}
          onChange={this.props.onChange}
          value={this.props.value}
          onBlur={this.props.onBlur}
          placeholder={this.props.placeholder} />
        </div>
      </div>
    )
  }
}
