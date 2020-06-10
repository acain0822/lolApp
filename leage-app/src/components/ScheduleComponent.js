import React, { Component } from "react";
import moment from "moment";

function DisplayAllDates({ matches }) {
  const allMatches = matches.map((match) => match.begin_at);

  return JSON.stringify(allMatches);
}

function ParseSchedule({ matches }) {
  // console.log(matches);
  let matchDates = Array.from(matches.map((match) => match.begin_at));
  // console.log(matchDates);

  // from https://stackoverflow.com/questions/48083728/group-dates-by-week-javascript

  //make an object that groups matches to weeks
  // Week: matches
  const groups = matchDates.reduce((acc = 0, date) => {
    const yearWeek = `${moment(date).year()}-${moment(date).week()}`;

    if (!acc[yearWeek]) {
      acc[yearWeek] = [];
    }

    acc[yearWeek].push(date);
    // acc[yearWeek].push(matchedMatch);
    return acc;
  }, {});

// map an array of dates
//getting dates that we will replace
// ie ["2018-07-29T20:41:28Z", "2018-07-29T21:32:14Z", "2018-08-05T01:08:11Z"]
  Object.values(groups).map((matchDateTime) => {
  
    console.log(matchDateTime);

    //loop over every date in the array
    for (let d = 0; d < matchDateTime.length; d++) {

      //set a variable and set it to find a match from the matches array
      //that has the same date and time to the
      //entry in the matchDateTime array
      console.log(matchDateTime[d]);
      let matchWithDate = matches.filter( match => {
       if(match.begin_at === matchDateTime[d]){
         matchDateTime[d] = match;
       }
         console.log(matchDateTime[d]);

      }
      );

    }
    
   // console.log(groups);
  });

  console.log(groups);
  var weeks = Object.keys(groups);
  return weeks.map((week, index = 0) => {
    index++;
    return <div> Week {index}</div>;
  });
}

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <DisplayAllDates matches={this.props.matches} />
        <br />
        <br />
        <ParseSchedule matches={this.props.matches} />
        <div>this is a schedule component</div>
      </React.Fragment>
    );
  }
}
export default Schedule;
