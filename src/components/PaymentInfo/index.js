import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import './PaymentInfo.css'
import BCA from '../../assets/bca.png'
import BRI from '../../assets/bri.png'
import Dana from '../../assets/dana.png'
import GooglePay from '../../assets/googlepay.png'
import GoPay from '../../assets/gopay.png'
import OVO from '../../assets/ovo.png'
import PayPal from '../../assets/paypal.png'
import Visa from '../../assets/visa.png'
import Warning from '../../assets/warning-logo.png'
import Input from '../Input'
import InputNumber from '../InputNumber'

class index extends Component {
  handlePay =() => {
    this.props.history.push('/movie/seat/payment/ticket')
  }
  render () {
    return (
      <Container fluid className='payment'>
        <Row>
          <Col lg={8}>
            <div className='paymentTitle orderWeb'>Payment Info</div>
            <div className='paymentForm'>
              <div className='paymentDetail'>
                <div className='paymentDetail1'>Date & time</div>
                <div className='paymentDetail2'>{`${'Tuesday, 07 July 2020'} at ${'02:00pm'}`}</div>
              </div>
              <div className='paymentDetail'>
                <div className='paymentDetail1'>Movie title</div>
                <div className='paymentDetail2'>Spider-Man: Homecoming</div>
              </div>
              <div className='paymentDetail'>
                <div className='paymentDetail1'>Cinema name</div>
                <div className='paymentDetail2'>CineOne21 Cinema</div>
              </div>
              <div className='paymentDetail'>
                <div className='paymentDetail1'>Number of tickets</div>
                <div className='paymentDetail2'>3 pieces</div>
              </div>
              <div className='paymentDetail border-0'>
                <div className='paymentDetail1'>Total payment</div>
                <div className='paymentDetail2'>{`$${'30'},00`}</div>
              </div>
            </div>

            <div className='paymentTitle orderWeb'>Choose a Payment Method</div>
            <div className='paymentForm'>
              <div className='paymentBtnForm'>
                {[BCA, BRI, Dana, GooglePay].map((logo, idx) => {
                  return (
                    <>
                      <Button className='paymentBtn' key={idx}>
                        <img src={logo} fluid />
                      </Button>
                    </>
                  )
                })}
              </div>
              <div className='paymentBtnForm'>
                {[GoPay, OVO, PayPal, Visa].map((logo, idx) => {
                  return (
                    <>
                      <Button className='paymentBtn' key={idx}>
                        <img src={logo} fluid />
                      </Button>
                    </>
                  )
                })}
              </div>
              <div className='paymentOr'>or</div>
              <div className='paymentOr'>Pay via cash. <Link className='paymentCash'>See how it work</Link></div>
            </div>

            <div className='payBtnFrom'>
              <Link to='/movie/seat' className='paymentBackStep'>Prvious step</Link>
              <Button onClick={this.handlePay} className='paymentPay'>Pay your order</Button>
            </div>

          </Col>
          <Col lg={4}>
            <div className='paymentTitle orderWeb'>Personal Info</div>
            <div className='PersonalInfoForm'>
                <div className='mb-4'>
                <Input label='Full Name' type='text' placeholder='Write your full name' />
                </div>
                <div className='mb-4'>
                <Input label='Email' type='email' placeholder='Write your email' />
                </div>
                <div className='mb-4'>
                <InputNumber label='Phone Number' type='text' placeholder='Write your phone number' />
                </div>
                <div className='PersonalInfoCaution'>
                  <img src={Warning} className='mr-3' />
                  <div>Fill your data correctly.</div>
                </div>

            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(index)
