import React, { Component } from 'react'
import './History.css'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'
import { allPurchase } from '../../Redux/Action/order'
import Logo from '../../assets/cineone210.jpg'

class index extends Component {
  async componentDidMount () {
    const { token, user } = this.props.auth
    await this.props.allPurchase(token, user.id)
  }

  render () {
    const { history } = this.props.order
    return (
      <Container fluid>
        {history === null
          ? <Row>
              <Col>
                <div className='orderHistoryEmpty'>No Order Yet</div>
              </Col>
            </Row>
          : (
          <>
            {
              history.map((item) => {
                return (
                  <>
                    <Row key={item.id} className='orderHistory'>
                      <Col>
                        <div className='orderHistoryForm'>
                          <div className='my-5'>
                            <div className='orderHistorySchedule'>{`${moment(item.date).format('dddd, DD MMMM YYYY')} - ${item.time}`}</div>
                            <div className='orderHistoryMovie'>{item.movie}</div>
                          </div>
                          <img src={Logo} className='orderHistoryImg' />
                        </div>
                        <div className='orderHistoryForm my-4 border-0'>
                          <Button className='orderHistoryBtn'>Ticket in active</Button>
                          <Link className='orderHistoryDetail'>Show Details</Link>
                        </div>
                      </Col>
                    </Row>
                  </>
                )
              })
            }
          </>
            )
        }

      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order
})

const mapDispatchToProps = { allPurchase }

export default connect(mapStateToProps, mapDispatchToProps)(index)
