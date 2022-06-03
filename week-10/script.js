// create function that takes in params
function getDays(start, end) {
  // assign variables to new date objects
  let date1 = new Date(start);
  let date2 = new Date(end);

  // Number of Milliseconds in 1 day
  let mill = 1000 * 60 * 60 * 24;

  // calculate time between days
  let timeDiff = date2.getTime() - date1.getTime();

  // calculate number of days between days
  let daysDiff = Math.round(timeDiff / mill);

  return daysDiff;
}

// plug in params and run function
console.log(getDays("6/3/2022", "7/5/2023"));
