function solution(s) {
  const input = s.split(" ");

  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "Z") {
      stack.pop();
      continue;
    }
    stack.push(input[i]);
  }
  // continue 쓴 이유는 "Z"가 입력되면 해당 요소를 스택에서 제거하고 다음 요소로 넘어가기 위해 사용

  const sum = stack.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);

  // Number를 씌워준 이유는 배열의 각 요소가 문자열 형태임
  // acc(누적기)는 초기값을 숫자 0 으로 설정해주어서 Number를 씌울 필요x

  return sum;
}