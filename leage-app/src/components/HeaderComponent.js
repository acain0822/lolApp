import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron
} from "reactstrap";
import { NavLink, Link } from 'react-router-dom';


class Header extends Component {
  constructor(props){
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron >
          {/* <button onClick={ () => {
              const matches = get(`/series/league-of-legends-na-lcs-summer-2018/matches`);
                matches.then( res => this.setState( {matches : res }) );
              }} >Request API</button> */}
          <Navbar dark expand="md">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen}>
              <Nav >
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/schedule">
                    Schedule
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/standings">
                    Standings
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Jumbotron>
      </React.Fragment>

    )
  }
}

export default Header;