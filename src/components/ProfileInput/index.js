import React, { Component } from 'react'
import './Profile.css'
import { Col, Row, Container, Button, Spinner } from 'react-bootstrap'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { updateUser } from '../../Redux/Action/auth'
import Input from '../Input'
import InputNumber from '../InputNumber'
import InputPassword from '../InputPassword'

class index extends Component {
  state = {
    isMessage: false,
    isLoading: false
  }

  // profileValidation = (values) => {
  //   const errors = {}
  //   const { firstName, lastName, email, phoneNumber, newPassword, repeatPassword } = values
  //   if (firstName.length < 3) {
  //     errors.firstName = 'First name minimum 3 characters'
  //   } else if (lastName.length < 3) {
  //     errors.lastName = 'Last name minimum 3 characters'
  //   } else if (!email) {
  //     errors.email = 'Email required'
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address'
  //   } else if (phoneNumber.length < 11) {
  //     errors.phoneNumber = 'Phone number minimum 11 numbers'
  //   } else if (newPassword.length < 8) {
  //     errors.password = 'Minimum password need 8 characters'
  //   } else if (newPassword !== repeatPassword) {
  //     errors.password = "New password doesn't match confrim password"
  //   }
  //   return errors
  // }

  async doUpdate (values) {
    const { token } = this.props.auth
    const { user } = this.props.auth
    this.props.updateUser(token, {
      id: user.id,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.newPassword
    })
    setTimeout(() => {
      this.setState({ isLoading: false, isMessage: true })
    }, 1000)
    setTimeout(() => {
      this.setState({ isMessage: false })
    }, 5000)
  }

  render () {
    const { isMessage, isLoading } = this.state
    const { user } = this.props.auth
    return (
      <Container fluid>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            newPassword: '',
            repeatPassword: ''
          }}
          // validate={(values) => this.profileValidation(values)}
          onSubmit={(values, { resetForm }) => {
            this.setState({ isLoading: true })
            this.doUpdate(values)
            setTimeout(() => {
              resetForm()
            }, 500)
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <>
              <Row>
                <Col className='ProfileInputForm'>
                  <div className='ProfileInputTitle'>Details Information</div>
                  <Row>
                    <Col>
                      <Input
                        label='First Name'
                        type='text'
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        placeholder={user.firstName === 'null' ? 'Write your first name' : user.firstName}
                      />
                      {errors.firstName
                        ? (
                          <div className='textError'>{errors.firstName}</div>
                          )
                        : null}
                    </Col>
                    <Col>
                      <Input
                        label='Last Name'
                        type='text'
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        placeholder={user.lastName === 'null' ? 'Write your last name' : user.lastName}
                      />
                      {errors.lastName
                        ? (
                          <div className='textError'>{errors.lastName}</div>
                          )
                        : null}
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col>
                      <Input
                        label='E-mail'
                        type='email'
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder={user.email === 'null' ? 'Write your email' : user.email}
                      />
                      {errors.email
                        ? (
                          <div className='textError'>{errors.email}</div>
                          )
                        : null}
                    </Col>
                    <Col>
                      <InputNumber
                        label='Phone Number'
                        type='text'
                        value={values.phoneNumber}
                        onChange={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        placeholder={user.phoneNumber === 'null' ? 'Write your phone number' : user.phoneNumber}
                      />
                      {errors.phoneNumber
                        ? (
                          <div className='textError'>{errors.phoneNumber}</div>
                          )
                        : null}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className='ProfileInputForm'>
                  <div className='ProfileInputTitle'>Account and Privacy</div>
                  <Row>
                    <Col>
                      <InputPassword
                        label='New Password'
                        type='password'
                        value={values.newPassword}
                        onChange={handleChange('newPassword')}
                        onBlur={handleBlur('newPassword')}
                        placeholder='Write your new password'
                      />
                    </Col>
                    <Col>
                      <InputPassword
                        label='Confirm Password'
                        type='password'
                        value={values.repeatPassword}
                        onChange={handleChange('repeatPassword')}
                        onBlur={handleBlur('repeatPassword')}
                        placeholder='Write your repeat password'
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              {this.props.auth.message !== '' && isMessage
                ? (
                  <div className='textSuccess'>
                    {this.props.auth.message}
                  </div>
                  )
                : null}
              {this.props.auth.errorMsg !== '' && isMessage
                ? (
                  <div className='textError'>
                    {this.props.auth.errorMsg}
                  </div>
                  )
                : null}
              {isLoading === true
                ? (
                  <>
                    <Spinner animation="border" variant="dark" />
                  </>
                  )
                : (
                  <>
                  {
                    values.firstName === '' && values.lastName === '' && values.email === '' && values.phoneNumber === '' && values.newPassword === '' && values.repeatPassword === ''
                      ? (
                        <div>
                          < Button variant='secondary' disabled className="ProfileInputBtn">Update changes</Button>
                        </div>
                        )
                      : (
                        <div>
                          < Button variant='outline-light' onClick={handleSubmit} className="ProfileInputBtn">Update changes</Button>
                        </div>
                        )
                  }
                  </>
                  )
              }
            </>
          )
          }
        </Formik>
      </Container >
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = { updateUser }

export default connect(mapStateToProps, mapDispatchToProps)(index)
