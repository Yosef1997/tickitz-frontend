import React, { Component } from 'react'
import './Login.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/tickitzwhite.png'
import Facebook from '../../assets/fb-logo.jpg'
import Google from '../../assets/Google-logo.jpg'
import Input from '../Input'
import InputPassword from '../InputPassword'

export default class index extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col lg={7} className='loginLegend'>
            <div>
              <img src={Logo} className='w-100  ' />
              <div className='loginLegendText1'>wait, watch, wow!</div>
            </div>
          </Col>
          <Col lg={5} className='loginForm'>
            <div className='loginFormTitle'>Sign In</div>
            <div className='loginFormSubtitle'>
              Sign in with your data that you entered during<br />
              your registration
            </div>
            <div className='mb-3'>
              <Input label='Email' type='email' placeholder='Write your email' />
            </div>
            <div className='mb-3'>
              <InputPassword label='Password' type='password' placeholder='Write your password' />
            </div>
            <div>
              <Button className="loginFormBtn">Sign In</Button>
            </div>
            <div className="loginFormLogin mt-3">Forgot your password? <span><Link to='/forgetpassword' style={{ color: '#5F2EEA' }}>Reset now</Link></span></div>
            <div className="loginFormLogin my-2">or</div>
            <div className='d-flex justify-content-between'>
              <Link className="loginFormAccount">
                <img src={Google} />
                Google
              </Link>
              <Link className="loginFormAccount">
                <img src={Facebook} />
                Facebook
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
