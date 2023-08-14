const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
// a = 1 1 2 2 2 8
// b = 0 1 2 2 2 7
// c = 1 0 0 0 0 1

function solution() {
  const whiteChess = input[0].split(" ").map(Number);
  const chess = [1, 1, 2, 2, 2, 8];
  let answer = "";
  let i = 0;
  while (i < whiteChess.length) {
    const item = chess[i] - whiteChess[i];
    i++;
    answer += item + " ";
  }
  console.log(answer);
}

// for (let i = 0; arr.length > i; i += 2) {
//   arr[i] = "a";
// }
// let i = -1;
// while (++i < arr.length) {
//   arr[i] = "a";
//   // console(arr[i]);
// }
