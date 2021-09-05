let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = true;
const star = () => {
  timer = true;
  stopWatch("timer");
};
const stop = () => {
  timer = false;
};
const reset = () => {
  timer = false;
  document.getElementById("hr").innerHTML = "0";
  document.getElementById("min").innerHTML = "0";
  document.getElementById("sec").innerHTML = "0";
  document.getElementById("count").innerHTML = "0";
};

const stopWatch = () => {
  if (timer === true) {
    count = count + 1;
    if (count === 100) {
      sec = sec + 1;
      count = 0;
      if (sec === 60) {
        min = min + 1;
        sec = 0;
        if (min === 60) {
          hr = hr + 1;
          sec = 0;
          min = 0;
        }
      }
    }
    let hrString = hr;
    let minString = min;
    let secString = sec;
    let counString = count;
    if (hr < 10) {
      hrString = "0" + hrString;
      minString = "0" + minString;
      secString = "0" + secString;
    }

    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = count;
    setTimeout("stopWatch()", 10);
  }
};
