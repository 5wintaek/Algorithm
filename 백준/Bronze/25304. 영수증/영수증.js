const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let total = parseInt(input[0]);
let cnt = parseInt(input[1]);
let sum = 0;

for (let i = 2; i <= cnt + 1; i++) {
  let newArr = input[i].split(" ").map(Number);
  // console.log(newArr);
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? "Yes" : "No");
