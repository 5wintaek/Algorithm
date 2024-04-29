const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= num; i++) {
  let cnt = input[i].split(" ");
  answer += Number(cnt[0]) + Number(cnt[1]) + "\n";
}

console.log(answer);
