// create a setinterval function that will updsate the date variable every second so that it
// increases one second every second.
setInterval(() => {
  const date = new Date();
  updateTime(date);
  updateClock(date)
}, 1000);

// function to make the clock tick
function updateClock(date) {
  // grab each time hand div's style properties and store it in a variable.
  const secHand = document.getElementById("sec-hand").style;
  const minHand = document.getElementById("min-hand").style;
  const hrHand = document.getElementById("hr-hand").style;

  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

// function to update the clock
function updateTime(date) {
  console.log("we did it!");
  // grab the element with an id of time and put it in a var.
  const timeDiv = document.getElementById("time");
  // create a var that will give us the current time in hours minutes and seconds for reference.
  const time = "time for reference: " + date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds();
  timeDiv.innerHTML = time;
}
