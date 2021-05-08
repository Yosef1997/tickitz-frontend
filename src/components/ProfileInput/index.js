import React, { Component } from 'react'
import './Profile.css'
import { Col, Row, Container, Button } from 'react-bootstrap'
import Input from '../Input'
import InputNumber from '../InputNumber'
import InputPassword from '../InputPassword'

export default class index extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col className='ProfileInputForm'>
            <div className='ProfileInputTitle'>Details Information</div>
            <Row>
              <Col>
                <Input label='First Name' />
              </Col>
              <Col>
                <Input label='Last Name' />
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Input label='E-mail' />
              </Col>
              <Col>
                <InputNumber label='Phone Number' />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='ProfileInputForm'>
          <div className='ProfileInputTitle'>Account and Privacy</div>
          <Row>
              <Col>
                <InputPassword label='New Password' placeholder='Write your password' />
              </Col>
              <Col>
                <InputPassword label='Confirm Password' placeholder='Confirm your password' />
              </Col>
            </Row>
          </Col>
        </Row>
          <Button variant='outline-light' className='ProfileInputBtn'>Update changes</Button>
      </Container>
    )
  }
}
