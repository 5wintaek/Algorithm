const input = require("fs").readFileSync("/dev/stdin").toString();

let cnt = 0;

for (let i = 1; i <= input; i++) {
  cnt += i;
}

console.log(cnt);
