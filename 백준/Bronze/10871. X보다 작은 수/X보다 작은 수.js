const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().split("\n");

// filter를 사용해서 v가 몇개인지 확인하기
const [a, b] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let answer = "";

for (let i = 0; i < a; i++) {
  if (b > arr[i]) {
    answer += arr[i] + " ";
    // " " 더한 이유는 띄워쓰기 때문에
  }
}
console.log(answer);

// 10 : N  / 5 : X
// A : 1 10 4 9 2 3 8 5 7 6
// X보다 작은 수를 입력받은 순대로 공백 출력
