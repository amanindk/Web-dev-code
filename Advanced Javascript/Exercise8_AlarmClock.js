function play() {
  var audio = new Audio("rnait.mp3");
  audio.play();
}

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toDateString() + "  " + d.toTimeString();
}, 1000);

const setAlarm = (seconds) => {
  let d = new Date().getTime();
  setTimeout(() => {
    play();
  }, seconds * 1000);

  setInterval(() => {
    secondsLeft = -(new Date().getTime() - (d + seconds * 1000));
    if (secondsLeft > 0) {
      alarm.innerHTML =
        "Alarm ringing in" + Math.floor(secondsLeft / 1000) + "Seconds";
    }
  });
};

let s = prompt("After How many seconds do you want an alarm");
setAlarm(parseInt(s));
