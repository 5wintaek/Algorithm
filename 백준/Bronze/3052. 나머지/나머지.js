const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const arr = input.map((item) => item % 42);

const set = new Set(arr);

const arr1 = [...set];

console.log(arr1.length);
