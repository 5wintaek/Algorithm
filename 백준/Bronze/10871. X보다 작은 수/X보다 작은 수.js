const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let answer = "";

for (let i = 0; i < a; i++) {
  if (b > arr[i]) {
    answer += arr[i] + " ";
  }
}

console.log(answer);
