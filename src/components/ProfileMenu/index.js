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
      <Router>
        <div className='profileMenu d-lg-none'>
          <Link to='/profile' className='profileMenuBtn mr-5'><div>Account Settings</div></Link>
          <Link to='/profile/orderhistory' className='profileMenuBtn'><div>Order History</div></Link>
        </div>
        <Container fluid className='profile d-lg-none'>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/profile">
                  <ProfileCard />
                  <Profile />
                </Route>
                <Route exact path="/profile/orderhistory">
                  <OrderHIstory />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>

        <Container fluid className='profile d-none d-lg-block'>
          <Row>
            <Col lg={4}>
              <ProfileCard />
            </Col>
            <Col lg={8}>
              <div className='profileMenu d-none d-lg-flex'>
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
        </Container>
      </Router>
    )
  }
}
