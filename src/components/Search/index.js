import React, { Component } from 'react'
import './Search.css'
import { Container, Row, Col, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import { searchMovie, detailMovie, newLink } from '../../Redux/Action/movie'
import { withRouter } from 'react-router'
import http from '../../Helper/http'

const { REACT_APP_API_URL: URL } = process.env

class index extends Component {
  state = {
    checked: false,
    radioValue: 'name',
    options: [
      { name: 'Name', value: 'name' }
    ],
    orderBy: true
  }

  handleOrderBy = async () => {
    this.setState({ orderBy: !this.state.orderBy })
    const { token } = this.props.auth
    const { orderBy } = this.state
    await this.props.searchMovie(token, '', 'name', `${orderBy ? 'DESC' : 'ASC'}`)
  }

  handleMovie = async (id) => {
    const { token } = this.props.auth
    await this.props.detailMovie(token, id)
    this.props.history.push('/movie')
  }

  handleViewMore = async () => {
    const { pageInfoMovie } = this.props.movie
    const newData = await http().get(pageInfoMovie)
    await this.props.newLink(newData.data.pageInfo.nextLink)
  }

  render () {
    const { options, radioValue, orderBy } = this.state
    const { pageInfoMovie, searchMovie } = this.props.movie
    return (
      <Container fluid className='search'>
        <Row>
          <Col>
            <div className='searchSort'>
              <div className='searchSortBy'>Sort by</div>
              <div className='d-flex justify-content-end w-50'>
                {options.map((option, idx) => {
                  return (
                    <>
                      <ButtonGroup key={idx} toggle>
                        <ToggleButton
                          key={idx}
                          type="radio"
                          className="searchOrderBtn"
                          name="options"
                          value={option.value}
                          checked={radioValue === option.value}
                          onChange={this.handleSort}
                        >
                          {option.name}
                        </ToggleButton>
                      </ButtonGroup>
                    </>
                  )
                })}
                <Button onClick={this.handleOrderBy} className="searchSortBtn">
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
          {searchMovie === [null]
            ? <Col><div>Movie Not Found</div></Col>

            : <>
            {searchMovie.map((item) => {
              return (
                <>
                  <Col key={item.id} lg={3} className='mt-5 mx-0'>
                    <div className="search-card">
                      <img src={`${URL}/upload/movie/${item.picture}`} alt='...' className="search-img" />
                      <div className="searchCardTitle">{item.name}</div>
                      <div className="searchCardGenre">Action, Adventure, Sci-Fi</div>
                      <div onClick={() => this.handleMovie(item.id)} className="searchCardBtn">Details</div>
                    </div>
                  </Col>
                </>
              )
            })}
          </>
          }

        </Row>
        <Row>
          <Col>
            {pageInfoMovie !== null
              ? <div onClick={this.handleViewMore} className='viewMore'>View More</div>
              : null}
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie
})

const mapDispatchToProps = { searchMovie, detailMovie, newLink }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
