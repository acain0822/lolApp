import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label
} from "reactstrap";
import { NavLink } from 'react-router-dom';

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
        <Jumbotron fluid>
          <div className="container">

          </div>
          <Navbar dark expand="md">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
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