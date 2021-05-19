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
            fullname: '',
            firstName: '',
            lastName: `${user.lastName === 'null' || user.lastName === '' ? '' : user.lastName}`,
            email: '',
            phoneNumber: '',
            newPassword: '',
            repeatPassword: ''
          }}
          onSubmit={(values, { resetForm }) => {
            this.setState({ isLoading: true })
            this.doUpdate(values)
            setTimeout(() => {
              resetForm()
            }, 500)
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <>
              <Row>
                <Col className='ProfileInputForm'>
                  <div className='ProfileInputTitle'>Details Information</div>
                  <Row className='d-lg-none'>
                    <Col>
                      <Input
                        label='Full Name'
                        type='text'
                        value={values.firstName}
                        onChange={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        placeholder={user.firstName === 'null' ? 'Write your full name' : `${user.firstName} ${user.lastName === 'null' ? '' : user.lastName}`}
                      />
                    </Col>
                  </Row>
                  <Row className='d-none d-lg-flex'>
                    <Col lg={6}>
                      <Input
                        label='First Name'
                        type='text'
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        placeholder={user.firstName === 'null' ? 'Write your first name' : user.firstName}
                      />
                    </Col>
                    <Col lg={6}>
                      <Input
                        label='Last Name'
                        type='text'
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        placeholder={user.lastName === 'null' ? 'Write your last name' : user.lastName}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} className='mt-3'>
                      <Input
                        label='E-mail'
                        type='email'
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder={user.email === 'null' ? 'Write your email' : user.email}
                      />
                    </Col>
                    <Col lg={6} className='mt-3'>
                      <InputNumber
                        label='Phone Number'
                        type='text'
                        value={values.phoneNumber}
                        onChange={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        placeholder={user.phoneNumber === 'null' ? 'Write your phone number' : user.phoneNumber}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className='ProfileInputForm'>
                  <div className='ProfileInputTitle mb-4'>Account and Privacy</div>
                  <Row>
                    <Col lg={6} className='mt-3'>
                      <InputPassword
                        label='New Password'
                        type='password'
                        value={values.newPassword}
                        onChange={handleChange('newPassword')}
                        onBlur={handleBlur('newPassword')}
                        placeholder='Write your new password'
                      />
                    </Col>
                    <Col lg={6} className='mt-3'>
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
