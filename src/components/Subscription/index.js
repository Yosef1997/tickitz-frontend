import React, { Component } from 'react'
import './Subcription.css'
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

export default class index extends Component {
  render () {
    return (
      <Container fluid className='Subcription'>
        <Row>
          <Col className='Subcription-col1'>
            <div className='Subcription-text1'>Be the vanguard of the</div>
            <div className='Subcription-text2'>Moviegoers</div>
            <div className='subcriptionForm'>
              <FormControl type="text" placeholder="Write your email" className="subcriptionInput" />
              <Button className="subcriptionBtn" type="submit">Join Now</Button>
            </div>
            <div className='Subcription-text3'>
              By joining you as a Tickitz member,<br></br>we will always send you the latest updates via email .
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
