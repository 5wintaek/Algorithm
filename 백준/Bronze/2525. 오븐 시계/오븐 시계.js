const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let hour = input[0].split(" ")[0];
let minute = input[0].split(" ")[1];
let time = input[1];

solution(+hour, +minute, +time); // 17, 40, 80

function solution(doneHour, doneMin, doneTime) {
  doneMin += doneTime; // 120

  while (doneMin >= 60) {
    doneMin -= 60;
    doneHour += 1;
  }

  doneHour %= 24;
  console.log(doneHour, doneMin);
}
