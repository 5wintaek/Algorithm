const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().split("\n");
// M 은 몇번 더하는지, K 는 몇번 더할 수 있는지
// N = 5 ,
// M = 8 , K = 3
// arr = [2,4,5,4,6]
// 반복되는 수열을 파악해서 구해야함

const arr = input[1].split(" ").map(Number);
const [n, m, k] = input[0].split(" ").map(Number);

const data = arr.sort();
const fisrt = data[n - 1];
const second = data[n - 2];

let count = parseInt(m / (k + 1)) * k;
count += m % (k + 1);

let result = 0;
result += count * fisrt;
result += (m - count) * second;

console.log(result);
