const fs = require('fs');
let input = fs.readFileSync(`/dev/stdin`).toString(); // 백준에서 입력 받는 방법
input = Number(input); // 입력을 숫자로 변환

if (input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}