setTimeout(oneMinute, 1000);
setTimeout(thirtySeconds, 1000 * 30);
setTimeout(timeUp, 1000 * 60)

/* PSEUDO CODE
  link timer start to click event of #start button in HTML
*/

function oneMinute() {
  // begins the clock for the game length
  $("#time-left").append("<h3>One minute on the clock!</h3>");
}

function thirtySeconds() {
  // provides user with a 30 second warning
  $("#time-left").append("<h5>30 seconds remaining!</h5>");
}

function timeUp() {
  // alert that the time for the quiz is over
  alert("Time's Up!")
}
