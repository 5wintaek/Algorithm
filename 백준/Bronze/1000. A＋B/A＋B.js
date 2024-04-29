const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

function solution() {
  const [a, b] = input;
  return console.log(a + b);
}

solution(1, 2);
