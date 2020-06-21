import React, { Component, useState, useEffect } from "react";
import { makeWeeksOfMatches } from "./utils";
import {
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Col,
  Card, CardImg, CardImgOverlay, CardTitle
} from "reactstrap";
import classnames from "classnames";

function CreateStandings() {

  return (
    //all placeholder just so i can visualize something
    <div className="container">
        <div className="row">
            <div className="col-md-2 m-1">
              <Card>
                <CardImg width='100%' src='../img/liquid.png' alt='Team Liquid' />
                <CardImgOverlay>
                    <CardTitle>Team Liquid</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
            <div className="col-md-2 m-1">
              <Card>
                <CardImg width='100%' src='../img/c9.png' alt='C9' />
                <CardImgOverlay>
                    <CardTitle>C9</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
        </div>
    </div>
);
}

class Standings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <CreateStandings
          listofMatches={makeWeeksOfMatches(this.props.matches)}
        />
      </React.Fragment>
    );
  }
}
export default Standings;
