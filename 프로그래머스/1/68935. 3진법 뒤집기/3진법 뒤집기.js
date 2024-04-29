function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3); // 왜 이게 첫번째로 사용이 되어야 하는지 모르겠음
    n = Math.floor(n / 3);
    // console.log(n);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}