import moment from "moment";

export function makeWeeksOfMatches(listOfMatches) {
  let matchDates = Array.from(listOfMatches.map((match) => match.begin_at));

  // from https://stackoverflow.com/questions/48083728/group-dates-by-week-javascript

  //make an object that groups matches to weeks
  //using moment.js
  // Week: matches
  const groups = matchDates.reduce((acc = 0, date) => {
    const yearWeek = `${moment(date).year()}-${moment(date).week()}`;

    if (!acc[yearWeek]) {
      acc[yearWeek] = [];
    }

    acc[yearWeek].push(date);
    return acc;
  }, {});
// map an array of dates
  Object.values(groups).map((matchDateTime) => {
  
    //loop over every date in the array
    for (let d = 0; d < matchDateTime.length; d++) {

      let matchWithDate = listOfMatches.filter( match => {

       if(match.begin_at === matchDateTime[d]){
         matchDateTime[d] = match;
       }
      }
      );

    }
    
  }); 

  //console.log(groups);
  return groups;

}
