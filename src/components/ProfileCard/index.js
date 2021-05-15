/* eslint-disable no-return-assign */
import React, { Component } from 'react'
import './Profile.css'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser, deletePicture } from '../../Redux/Action/auth'
import Profil from '../../assets/profile.png'
import Star from '../../assets/star.png'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  state = {
    isLoading: false,
    message: '',
    selectedFile: false
  }
  uploadPicture = async (value) => {
    this.setState({ isLoading: true })
    const FILE_SIZE = 500 * 1024
    const SUPPORTED_FORMATS = [
      'image/jpg',
      'image/jpeg',
      'image/gif',
      'image/png'
    ]
    const { token, user } = this.props.auth

    console.log(SUPPORTED_FORMATS.indexOf(value.type))
    if (SUPPORTED_FORMATS.indexOf(value.type) === -1) {
      setTimeout(() => {
        this.setState({ isLoading: false, message: 'File not compatibel' })
      }, 2000)
    } else if (FILE_SIZE < value.size) {
      setTimeout(() => {
        this.setState({ isLoading: false, message: 'File to large' })
      }, 2000)
    } else {
      await this.props.updateUser(token, { id: user.id, picture: (value) })
      setTimeout(() => {
        this.setState({ isLoading: false, message: 'Update profile succsefully', selectedFile: true })
      }, 2000)
    }
    setTimeout(() => {
      this.setState({ message: '', selectedFile: false })
    }, 6000)
  }

deletePicture = async () => {
  this.setState({ isLoading: true })
  const { token } = this.props.auth
  await this.props.deletePicture(token, { id: this.props.auth.user.id })
  setTimeout(() => {
    this.setState({ isLoading: false, message: 'Delete picture profile successfully' })
  }, 2000)
  setTimeout(() => {
    this.setState({ message: '', selectedFile: false })
  }, 5000)
}

render () {
  const { isLoading, message, selectedFile } = this.state
  const { user } = this.props.auth
  return (
      <Container fluid className='profileCard'>
        <Row>
          <Col>
            <div className='profileCardHeader'>
              <div className='profileCardText1'>INFO</div>
              <Link className='profileCardMenu'>. . .</Link>
            </div>
            <input
              style={{ display: 'none' }}
              type='file'
              onChange={(event) => this.uploadPicture(event.target.files[0])}
              ref={fileInput => this.fileInput = fileInput}
            />
            <div onClick={() => this.fileInput.click()} className='profileCardBtn'>
              {user.picture === null
                ? <img src={Profil} className='profileCardImg' />
                : <img src={`${URL}/upload/profile/${user.picture}`} className='profileCardImg' />
              }
            </div>
            {isLoading
              ? (<div className='d-flex flex-row justify-content-center mt-3'>
                <Spinner animation="grow" size="md" variant="success" />
              </div>
                )
              : (null)}
            {user.picture !== null && !isLoading && message === '' ? <div onClick={this.deletePicture} className='profilCardDeleteBtn'>Delete Picture</div> : null}
            {message !== '' && selectedFile ? <div className='textSuccess text-center'>{message}</div> : <div className='textError text-center'>{message}</div>}
            {user.firstName === 'null' && user.lastName === 'null'
              ? (<div className='profileCardName'>No Name</div>
                )
              : (<div className='profileCardName'>{`${user.firstName} ${user.lastName === 'null' ? '' : user.lastName}`}</div>
                )}
            <div className='profileCardText2'>Moviegoers</div>
            <div className='profileCardLoyalty'>
              <div className='profileCardText1 font-weight-bold'>Loyalty Points</div>
              <div className="rectangle1">
                <div className="rectangle2 text-start ps-3">
                  <div className="Moviegoers">Moviegoers</div>
                  <p>320<span>points</span></p>
                </div>
                <img src={Star} className="star" alt="star" />
                <div className="circle1 rounded-circle">
                  <div className="circle2 rounded-circle"></div>
                </div>
              </div>
              <div className='profileCardText1 text-center mb-2'>{`${'180'} points become a master`}</div>
              <div className="progress">
                <div className="profileCardProgress" style={{ width: 100 }} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = { updateUser, deletePicture }
export default connect(mapStateToProps, mapDispatchToProps)(index)
