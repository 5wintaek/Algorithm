function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else { // s[i] === ')'
      if (stack.length === 0) {
        return false; // 닫는 괄호가 여는 괄호보다 많음
      }
      stack.pop(); // 여는 괄호와 짝을 맞춤
    }
  }

  return stack.length === 0; // 스택이 비어있으면 true, 아니면 false
}