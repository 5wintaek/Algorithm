const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
  let cnt = input[i].split(" ");
  console.log(`Case #${i}: ${cnt[0]} + ${cnt[1]} = ${Number(cnt[0]) + Number(cnt[1])}`);
}
