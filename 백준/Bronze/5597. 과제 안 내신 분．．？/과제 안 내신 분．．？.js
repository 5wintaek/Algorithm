const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = 30;
const m = input.map(Number);

let arr = new Array(n).fill().map((v, i) => i + 1);

// arr에  input값(m)이 있는지 확인
let arr2 = arr.filter((x) => !m.includes(x));

console.log(arr2.join(" "));
