import React, { Component } from 'react'
import './Register.css'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import Logo from '../../assets/tickitzwhite.png'
import LogoPurple from '../../assets/tickitzpurple.png'
import Facebook from '../../assets/fb-logo.jpg'
import Google from '../../assets/Google-logo.jpg'
import Input from '../Input'
import InputPassword from '../InputPassword'
import { connect } from 'react-redux'
import { signup } from '../../Redux/Action/auth'

class index extends Component {
  state = {
    isMessage: false,
    isLoading: false,
    checked: false
  }

  registerValidation = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    } else if (!values.password) {
      errors.password = 'Password required'
    } else if (values.password.length < 8) {
      errors.password = 'Minimum password need 8 characters'
    }
    return errors
  }

  async doSignUp (values) {
    this.setState({ isLoading: true })
    await this.props.signup(values.email, values.password)
    setTimeout(() => {
      this.setState({ isLoading: false, isMessage: true })
    }, 3000)
    setTimeout(() => {
      this.setState({ isMessage: false })
    }, 6000)
    if (this.props.auth.errorMsg === '') {
      this.props.history.push('/login')
    }
  }

  render () {
    const { isMessage, isLoading, checked } = this.state

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
            <div className='registerFormImg'><img src={LogoPurple} alt='...' /></div>
            <div className='registerFormTitle'>Fill your additional details</div>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validate={(values) => this.registerValidation(values)}
              onSubmit={(values, { resetForm }) => {
                this.setState({ isLoading: true })
                this.doSignUp(values)
                setTimeout(() => {
                  resetForm()
                }, 500)
              }}
            >
              {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <>
                  <div className='mb-3'>
                    <Input
                      label='Email'
                      type='email'
                      value={values.email}
                      onChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder='Write your email'
                    />
                    {errors.email
                      ? (
                        <div className='textError'>{errors.email}</div>
                        )
                      : null}
                  </div>
                  <div className='mb-3'>
                    <InputPassword
                      label='Password'
                      type='password'
                      value={values.password}
                      onChange={handleChange('password')}
                      onBlur={handleBlur('password')}
                      placeholder='Write your password'
                    />
                    {errors.password
                      ? (
                        <div className='textError'>{errors.password}</div>
                        )
                      : null}
                  </div>
                  <div className='mb-3'>
                    <label className="registerFormCheckBox">I agree to terms & conditions
                      <input type="checkbox" onClick={() => this.setState({ checked: !checked })} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
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
                      {(!values.email || !values.password) || errors.password || checked === false
                        ? (
                        <div>
                          < Button variant="secondary" className="registerFormBtn" disabled >Join for free now</Button>
                        </div>
                          )
                        : (
                        <div>
                          < Button onClick={handleSubmit} className="registerFormBtn">Join for free now</Button>
                        </div>
                          )}
                    </>
                      )}
                </>
              )}
            </Formik>
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
      </Container >
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = { signup }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
