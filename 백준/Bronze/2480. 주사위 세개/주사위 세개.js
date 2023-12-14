const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

// console.log(input); map(Number)를 통해 문자->숫자 변환

const [first, second, third] = input;
// console.log(...input);
let prize = 0;

if (first === second && second === third) {
  prize = 10000 + first * 1000;
} else if (first === second || first === third) {
  prize = 1000 + first * 100;
} else if (second === third) {
  prize = 1000 + second * 100;
} else {
  prize = Math.max(...input) * 100;
}
console.log(prize);
