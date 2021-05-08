import React, { Component } from 'react'
import './ProfileMenu.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import Profile from '../ProfileInput'
import ProfileCard from '../ProfileCard'

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
                <Link to='/Profile' className='profileMenuBtn mr-5'><div>Account Settings</div></Link>
                <Link to='/Profile/orderhistory' className='profileMenuBtn'><div>Order History</div></Link>
              </div>
              <div>
                <Switch>
                  <Route exact path="/Profile">
                    <Profile />
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
