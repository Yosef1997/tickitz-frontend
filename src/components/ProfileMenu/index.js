import React, { Component } from 'react'
import './ProfileMenu.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import Profile from '../ProfileInput'
import ProfileCard from '../ProfileCard'
import OrderHIstory from '../OrderHistory'

export default class index extends Component {
  render () {
    return (
      <Container fluid className='profile'>
        <Router>
          <Row>
            <Col lg={4}>
              <ProfileCard />
            </Col>
            <Col lg={8}>
              <div className='profileMenu'>
                <Link to='/profile' className='profileMenuBtn mr-5'><div>Account Settings</div></Link>
                <Link to='/profile/orderhistory' className='profileMenuBtn'><div>Order History</div></Link>
              </div>
              <div>
                <Switch>
                  <Route exact path="/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/profile/orderhistory">
                    <OrderHIstory />
                  </Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </Router>
      </Container>
    )
  }
}
