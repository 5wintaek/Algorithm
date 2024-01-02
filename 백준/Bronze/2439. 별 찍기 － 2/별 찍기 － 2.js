const input = require("fs").readFileSync("/dev/stdin").toString();

let inputNum = Number(input);

let star = new Array(inputNum).fill(" ");

for (let i = inputNum - 1; i >= 0; i--) {
  star[i] = "*";
  console.log(star.join(""));
}
