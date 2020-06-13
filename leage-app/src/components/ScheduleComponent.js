import React, { Component, Fragment } from "react";
import { makeWeeksOfMatches } from "./utils";
import { Table, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

function CreateSchedule({ listofMatches }) {
  const weekArray = Object.keys(listofMatches);
  const matchesofWeek = weekArray.map((week, inc = 0) => {
    let weekObject = listofMatches[week];
    let matches = weekObject.map((match) => {
      console.log(match);
      return (
        <tr key={match.id}>
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
          <td></td>
        </tr>
      );
    });
    return (
      <React.Fragment>
        <thead>
          <th>Week {inc + 1}</th>
        </thead>
        <tbody>{matches}</tbody>
      </React.Fragment>
    );
  });

  return <Table dark hover responsive>{matchesofWeek}</Table>;
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
        <br />
        <br />
        <div>this is a schedule component</div>
      </React.Fragment>
    );
  }
}
export default Schedule;
