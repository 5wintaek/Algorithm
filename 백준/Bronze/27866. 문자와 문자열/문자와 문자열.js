const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];
const i = input[1];
function solution() {
  console.log(S.slice(i - 1, i));
}

solution("Sprout", 3);