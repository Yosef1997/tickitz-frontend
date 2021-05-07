import React, { Component } from 'react'
import './Register.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/tickitzwhite.png'
import Facebook from '../../assets/fb-logo.jpg'
import Google from '../../assets/Google-logo.jpg'
import Input from '../Input'

export default class index extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col lg={7} className='registerLegend'>
            <img src={Logo} />
            <div className='registerLegendText1'>Lets build your account</div>
            <div className='registerLegendText2'>
              To be a loyal moviegoer and access all of features,<br />
              your details are required.
            </div>
            <div className='registerLegendForm mt-5'>
              <Button className='registerLegendBtn'>1</Button>
              <div className='registerLegendText2'>Fill your additional details</div>
            </div>
            <div className='registerLegendLine' />
            <div className='registerLegendForm'>
              <Button className='registerLegendBtn'>2</Button>
              <div className='registerLegendText2'>Activate your account</div>
            </div>
            <div className='registerLegendLine' />
            <div className='registerLegendForm'>
              <Button className='registerLegendBtn'>3</Button>
              <div className='registerLegendText2'>Done</div>
            </div>
          </Col>
          <Col lg={5} className='registerForm'>
            <div className='registerFormTitle'>Fill your additional details</div>
            <div className='mb-3'>
              <Input label='Email' type='email' placeholder='Write your email' />
            </div>
            <div className='mb-3'>
              <Input label='Password' type='password' placeholder='Write your password' />
            </div>
            <div className='mb-3'>
              <label className="registerFormCheckBox">I agree to terms & conditions
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <Button className="registerFormBtn">Join for free now</Button>
            </div>
            <div className="registerFormLogin mt-3">Do you already have an account? <span><Link to='/login' style={{ color: '#5F2EEA' }}>Log in</Link></span></div>
            <div className="registerFormLogin my-2">or</div>
            <div className='d-flex justify-content-between'>
              <Link className="registerFormAccount">
                <img src={Google} />
                Google
              </Link>
              <Link className="registerFormAccount">
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
