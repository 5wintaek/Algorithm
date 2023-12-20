const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let n = parseInt(input);
let str = "";

while (n > 0) {
  if (n % 4 === 0) {
    str += "long ";
  }
  n -= 4;
}
console.log(`${str}int`);