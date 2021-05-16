import React, { Component } from 'react'
import './ViewAll.css'
import { Container, Row, Col, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import Profil from '../../assets/profile.png'

export default class index extends Component {
  state = {
    checked: false,
    radioValue: 'name',
    options: [
      { name: 'Name', value: 'name' },
      { name: 'Genre', value: 'genre' }
    ],
    orderBy: true
  }

  handleMonth = async (event) => {
    this.setState({ radioValue: event.target.value })
    // const { token } = this.props.auth
    // await this.props.allMovieByMonth(token, event.target.value)
    console.log(this.state.radioValue)
  }

  handleOrderBy = () => {
    this.setState({ orderBy: !this.state.orderBy })
  }

  render () {
    const { options, radioValue, orderBy } = this.state
    return (
      <Container fluid className='viewAll'>
        <Row>
          <Col>
            <div className='viewAllSort'>
              <div className='viewAllSortBy'>Sort by</div>
              <div className='d-flex justify-content-around w-50 text-right'>
                {options.map((option, idx) => {
                  return (
                    <>
                      <ButtonGroup toggle>
                        <ToggleButton
                          key={idx}
                          type="radio"
                          className="viewAllOrderBtn"
                          name="options"
                          value={option.value}
                          checked={radioValue === option.value}
                          onChange={this.handleMonth}
                        >
                          {option.name}
                        </ToggleButton>
                      </ButtonGroup>
                    </>
                  )
                })}
                <Button onClick={this.handleOrderBy} className="viewAllSortBtn">
                  {orderBy
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-sort-alpha-down" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
                      <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
                      <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" />
                      <path fillRule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z" />
                      <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                    </svg>
                  }
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {[...Array(8)].map((item, idx) => {
            return (
              <>
                <Col lg={3} className='mt-5 mx-0'>
                  <div className="viewAll-card">
                    {/* key={item.id} */}
                    {/* `${URL}/upload/movie/${item.picture}` */}
                    {/* onClick={() => this.handleMovie(item.id)} */}
                    <img src={Profil} alt='...' className="viewAll-img" />
                    <div className="viewAllCardTitle">Black Widow</div>
                    <div className="viewAllCardGenre">Action, Adventure, Sci-Fi</div>
                    <div className="viewAllCardBtn">Details</div>
                  </div>

                </Col>
              </>
            )
          })}
        </Row>
      </Container>
    )
  }
}
