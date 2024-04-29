function solution(array, n) {
  // 가장 적은 수를 출력해야 해서 정렬이 첫번째
  array.sort((a, b) => a - b);
  let each = Infinity;
  let result = 0;

  for (let i of array) {
    // 절대값을 취해주지 않으면 뒤로갈수록 맨 뒤에 값이 출력이 됌
    // 우리가 알고싶은값은 두수의 차가 적은값
    if (Math.abs(n - i) < each) {
      each = Math.abs(n - i);
      result = i;
    }
  }
  return result
}