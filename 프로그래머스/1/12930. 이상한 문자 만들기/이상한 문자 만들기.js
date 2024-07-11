function solution(s) {
  let answer = s.split('');
  let isEven = true;
  for (let i = 0; i < answer.length; i++) {
      // 공백이라면 통과
      if (answer[i] === " ") {
          isEven = true;
          continue
      };
      
      // 글자라면 변환
      // 짝수일 경우
      if (isEven) answer[i] = answer[i].toUpperCase();
      // 홀수일 경우
      if (!isEven) answer[i] = answer[i].toLowerCase();
      isEven = !isEven;
  }
  return answer.join('');
}
