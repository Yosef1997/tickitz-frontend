import React, { Component } from 'react'
import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../Redux/Action/auth'
import Profil from '../../assets/avanger.jpg'
import Star from '../../assets/star.png'

class index extends Component {
  render () {
    const { user } = this.props.auth
    return (
      <Container fluid className='profileCard'>
        <Row>
          <Col>
            <div className='profileCardHeader'>
              <div className='profileCardText1'>INFO</div>
              <Link className='profileCardMenu'>. . .</Link>
            </div>
            <div onClick={() => console.log('image')} className='profileCardBtn'>
              <img src={Profil} className='profileCardImg' />
            </div>
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
const mapDispatchToProps = { updateUser }
export default connect(mapStateToProps, mapDispatchToProps)(index)
