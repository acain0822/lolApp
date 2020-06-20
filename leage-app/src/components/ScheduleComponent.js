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
} from "reactstrap";
import classnames from "classnames";

function CreateSchedule({ listofMatches }) {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const weekArray = Object.keys(listofMatches);
  const matchesofWeek = weekArray.map((week, inc = 0) => {
    let weekObject = listofMatches[week];
    inc++;
    let matches = weekObject.map((match) => {
      return (
        <tr>
          <td>
            <img
              alt={match.opponents[0].opponent.acronym}
              style={{ width: "30px" }}
              src={match.opponents[0].opponent.image_url}
            />
            {match.opponents[0].opponent.acronym} vs{" "}
            <img
              alt={match.opponents[1].opponent.acronym}
              style={{ width: "30px" }}
              src={match.opponents[1].opponent.image_url}
            />
            {match.opponents[1].opponent.acronym}
          </td>
        </tr>
      );
    });
    return (
      <TabPane tabId={inc}>
        <Table dark hover>
          <tbody>{matches}</tbody>
        </Table>
      </TabPane>
    );
  });

  return (
    <Col md="12">
      <Nav tabs>
        {weekArray.map((week, inc = 0) => {
          inc++;
          return (
            <NavItem>
              <NavLink
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
                className={classnames({ active: activeTab === inc })}
                onClick={() => {
                  toggle(inc);
                }}
              >
                Week {inc}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={activeTab}>{matchesofWeek}</TabContent>
    </Col>
  );
}

class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <CreateSchedule
          listofMatches={makeWeeksOfMatches(this.props.matches)}
        />
      </React.Fragment>
    );
  }
}
export default Schedule;
