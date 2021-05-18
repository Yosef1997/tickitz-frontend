import React, { Component } from 'react'
import './Navbar.css'
import { Navbar as NavbarBrowser, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap'
import Brand from '../../assets/tickitzpurple.png'
import Search from '../../assets/searchicon.png'
import Overlays from '../Overlays'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../../Redux/Action/auth'
import { searchMovie } from '../../Redux/Action/movie'

class Navbar extends Component {
  state = {
    search: ''
  }
  handleLogOut = () => {
    this.props.signout()
    this.props.history.push('/')
  }
  handleSearch = async () => {
    const { token } = this.props.auth
    const { search } = this.state
    await this.props.searchMovie(token, search)
    this.props.history.push('/search')
  }
  render () {
    const { token } = this.props.auth
    console.log(this.state.search)
    return (
      <NavbarBrowser collapseOnSelect expand="lg" bg="white" variant="light" className="containerNavbar">
        <NavbarBrowser.Brand><Link to="/"><img src={Brand} alt="..." /></Link></NavbarBrowser.Brand>
        <NavbarBrowser.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBrowser.Collapse id="responsive-navbar-nav">
          <Nav className="p-2 mr-auto">
            <div className="search-mobile">
              <FormControl type="text" placeholder="Search" className="input-search-mobile sm-2" />
              <Button type="submit" className="btn-search"><img src={Search} alt=".." /></Button>{' '}
            </div>
            <Nav.Link href="#nowShowing" className="navlink">Movies</Nav.Link>
            <Nav.Link href="#Cinemas" className="navlink">Cinemas</Nav.Link>
            <Nav.Link href="#Buy-Ticket" className="navlink">Buy Ticket</Nav.Link>
            <NavDropdown className="nav-mobile navlink mr-1" title="Location" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jakarta Barat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jakarta Selatan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jakarta Pusat</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Jawa Barat</NavDropdown.Item>
            </NavDropdown>
            {token
              ? (
                <>
                  <Link to="/profile" className="btn-signup-mobile">Profile</Link>
                  <div onClick={this.handleLogOut} className="btn-signup-mobile">Sign out</div>
                </>
                )
              : (<Link to="/register" className="btn-signup-mobile">Sign up</Link>
                )}
            <p className="nav-mobile">© 2020 Tickitz. All Rights Reserved.</p>
          </Nav>
          <Nav className="nav-web">
            <NavDropdown title="Location" id="collasible-nav-dropdown" className="navlink">
              <NavDropdown.Item href="#action/3.1">Jakarta Barat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jakarta Selatan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jakarta Pusat</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Jawa Barat</NavDropdown.Item>
            </NavDropdown>
            <div className="search-web">
              <FormControl
                type="text"
                placeholder="Search"
                onChange={(event) => this.setState({ search: event.target.value })}
                className="input-search-mobile sm-2"
              />
              <Button type="submit" onClick={this.handleSearch} className="btn-search"><img src={Search} alt=".." /></Button>{' '}
            </div>
            {token
              ? (
                <Overlays />
                )
              : (<Link to="/register"><Button type="submit" className="btn-signup ml-2 p-2">Sign up</Button>{' '}</Link>
                )
            }
          </Nav>
        </NavbarBrowser.Collapse>
      </NavbarBrowser>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = { signout, searchMovie }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
