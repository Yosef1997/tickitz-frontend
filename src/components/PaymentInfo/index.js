import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import moment from 'moment'
import { connect } from 'react-redux'
import { updateUser } from '../../Redux/Action/auth'
import { purchase } from '../../Redux/Action/order'
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
  state = {
    isLoading: false,
    isMessage: false
  }

  paymentValidation = (values) => {
    const errors = {}
    const { fullName, email, phoneNumber } = values
    if (fullName.length < 3) {
      errors.fullName = 'First name minimum 3 characters'
    } else if (!email) {
      errors.email = 'Email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    } else if (phoneNumber.length < 11) {
      errors.phoneNumber = 'Phone number minimum 11 numbers'
    }
    return errors
  }

  handlePay = async (values) => {
    const { token, user } = this.props.auth
    const { detailMovie, detailDate, detailLocation, detailTime, detailCinema, seatOrder } = this.props.order
    await this.props.updateUser(token, { fullName: values.fullName, email: values.email, phoneNumber: values.phoneNumber })
    await this.props.purchase(token, detailMovie.name, detailDate.date, detailLocation.name, detailTime.time, detailCinema.name, seatOrder.seat, user.id)
    this.props.history.push('/movie/seat/payment/ticket')
  }

  render () {
    const { user } = this.props.auth
    const { detailMovie, detailDate, detailTime, detailCinema, seatOrder } = this.props.order
    return (
      <Container fluid className='payment'>
        <Formik
          initialValues={{
            fullName: `${user.firstName === 'null' && user.lastName === 'null' ? '' : `${user.firstName} ${user.lastName}`}`,
            email: `${user.email}`,
            phoneNumber: `${user.phoneNumber === 'null' ? '' : user.phoneNumber}`
          }}
          validate={(values) => this.paymentValidation(values)}
          onSubmit={(values, { resetForm }) => {
            this.setState({ isLoading: true })
            this.handlePay(values)
            setTimeout(() => {
              resetForm()
            }, 500)
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <>
              <Row>
                <Col lg={8}>
                  <div className='paymentTitle orderWeb'>Payment Info</div>
                  <div className='paymentForm'>
                    <div className='paymentDetail'>
                      <div className='paymentDetail1'>Date & time</div>
                      <div className='paymentDetail2'>{`${moment(detailDate.date).format('dddd, DD MMMM YYYY')} at ${detailTime.time}`}</div>
                    </div>
                    <div className='paymentDetail'>
                      <div className='paymentDetail1'>Movie title</div>
                      <div className='paymentDetail2'>{detailMovie.name}</div>
                    </div>
                    <div className='paymentDetail'>
                      <div className='paymentDetail1'>Cinema name</div>
                      <div className='paymentDetail2'>{`${detailCinema.name} Cinema`}</div>
                    </div>
                    <div className='paymentDetail'>
                      <div className='paymentDetail1'>Number of tickets</div>
                      <div className='paymentDetail2'>{`${seatOrder.seat.length} pieces`}</div>
                    </div>
                    <div className='paymentDetail border-0'>
                      <div className='paymentDetail1'>Total payment</div>
                      <div className='paymentDetail2'>{`$${seatOrder.price},00`}</div>
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
                </Col>
                <Col lg={4}>
                  <div className='paymentTitle orderWeb'>Personal Info</div>
                  <div className='PersonalInfoForm'>
                    <div className='mb-4'>
                      <Input
                        label='Full Name'
                        type='text'
                        value={values.fullName}
                        onChange={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        placeholder='Write your full name' />
                      {errors.fullName ? (<div className='textError'>{errors.fullName}</div>) : (null)}
                    </div>
                    <div className='mb-4'>
                      <Input
                        label='Email'
                        type='email'
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder='Write your email' />
                      {errors.email ? (<div className='textError'>{errors.email}</div>) : (null)}
                    </div>
                    <div className='mb-4'>
                      <InputNumber
                        label='Phone Number'
                        type='text'
                        value={values.phoneNumber}
                        onChange={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        placeholder='Write your phone number' />
                      {errors.phoneNumber ? (<div className='textError'>{errors.phoneNumber}</div>) : (null)}
                    </div>
                    <div className='PersonalInfoCaution'>
                      <img src={Warning} className='mr-3' />
                      <div>Fill your data correctly.</div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <div className='payBtnFrom'>
                    <Link to='/movie/seat' className='paymentBackStep'>Prvious step</Link>
                    {!errors.fullName && !errors.phoneNumber && values.fullName !== '' && values.phoneNumber !== ''
                      ? (<Button onClick={handleSubmit} className='paymentPay'>Pay your order</Button>
                        )
                      : (<Button variant='secondary' disabled className='paymentPay'>Pay your order</Button>
                        ) }
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Formik>
      </Container>
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order
})
const mapDispatchToProps = { updateUser, purchase }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
