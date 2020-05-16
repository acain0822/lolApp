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
         
    <div class="jumbotron py-sm-2 my-0">

      <nav class="navbar navbar-expand-lg text-white navbar-dark">
        <Link class="navbar-brand" to="/">LoLApp</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/standings">Standings</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="schedule">Schedule</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Watch</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 ">
            <input
              class="rounded-left form-control mr-sm-0 search-field"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="ml-0 btn btn-outline my-2 my-sm-0 rounded-right" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
      </React.Fragment>
    )
  }
}

export default Header;