function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      // s[i] === ')'
      if (stack.length === 0) {
        return false; // 닫는 괄호가 여는 괄호보다 많을 떄
      }
      stack.pop(); // ')' 가 들어갈 때 POP
    }
  }

  return stack.length === 0; // 스택이 비어있으면 true, 아니면 false
}

// s = "()()" 일 떄,
// i = 0 -> for문을 돌면 "(" push
// i = 1 -> for문을 돌면 else로 들어가서 stack.pop -> 스택이 비어이지 않기 떄문에 여는 괄호를 꺼내서 닫는 괄호랑 짝을 맞춤
// i = 2 -> for문을 돌면 "(" push
// i = 3 -> for문을 돌면 else로 들어가서 stack.pop -> 스택이 비어이지 않기 떄문에 여는 괄호를 꺼내서 닫는 괄호랑 짝을 맞춤
// return stack.length === 0; -> 스택이 비어있으면 true , 아니면 false 로 종료
// if(stack.length === 0) -> 여는 괄호가 닫는 괄호보다 많을 떄 false로 바로 처리하기 위한 코드
