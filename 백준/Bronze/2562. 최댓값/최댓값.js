const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);

const max = Math.max(...input);
let maxArr = 0;

function solution() {
  for (let i = 0; i < 9; i++) {
    if (max === input[i]) {
      maxArr = i + 1;
    }
  }
  console.log(max, maxArr);
}

solution(3, 29, 38, 12, 57, 74, 40, 85, 61);