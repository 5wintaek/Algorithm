function solution(n) {
  let answer = 0;
  for (let _ = 0; _ < n; _++) {
    answer += 1;
    while (answer % 3 == 0 || answer.toString().split("").includes("3")) {
      answer += 1;
    }
  }
    return answer
}

// _ 는 아무것도 사용 하지 않을 때 사용
// while문에 toString을 한 이유는
// 숫자는 split 사용이 불가능하니 문자열로 바꿔줌

