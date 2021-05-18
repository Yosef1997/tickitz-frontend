import React, { Component } from 'react'
import './ForgetPass.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Logo from '../../assets/tickitzwhite.png'
import LogoPurple from '../../assets/tickitzpurple.png'
import Input from '../Input'

export default class index extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col lg={7} className='forgetPasswordLegend'>
            <img src={Logo} />
            <div className='forgetPasswordLegendText1'>Lets reset your password</div>
            <div className='forgetPasswordLegendText2'>
              To be able to use your account again, please<br />
            complete the following steps.
            </div>
            <div className='forgetPasswordLegendForm mt-5'>
              <Button className='forgetPasswordLegendBtn'>1</Button>
              <div className='forgetPasswordLegendText2'>Fill your complete email</div>
            </div>
            <div className='forgetPasswordLegendLine' />
            <div className='forgetPasswordLegendForm'>
              <Button className='forgetPasswordLegendBtn'>2</Button>
              <div className='forgetPasswordLegendText2'>Activate your email</div>
            </div>
            <div className='forgetPasswordLegendLine' />
            <div className='forgetPasswordLegendForm'>
              <Button className='forgetPasswordLegendBtn'>3</Button>
              <div className='forgetPasswordLegendText2'>Enter your new password</div>
            </div>
            <div className='forgetPasswordLegendLine' />
            <div className='forgetPasswordLegendForm'>
              <Button className='forgetPasswordLegendBtn'>4</Button>
              <div className='forgetPasswordLegendText2'>Done</div>
            </div>
          </Col>
          <Col lg={5} className='forgetPasswordForm'>
            <div className='registerFormImg'><img src={LogoPurple} alt='...' /></div>
            <div className='forgetPasswordFormTitle'>Fill your complete email</div>
            <div className='forgetPasswordFormSubtitle'>we{"'"}ll send a link to your email shortly</div>
            <div className='mb-5'>
              <Input label='Email' type='email' placeholder='Write your email' />
            </div>
            <div>
              <Button className="forgetPasswordFormBtn">Activate now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
