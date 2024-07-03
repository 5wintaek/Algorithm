function solution(n) {
  let answer = [];
  let count = 0;
  const arr = Array.from({ length: n }, (_, index) => new Array(index + 1).fill(0));
  let currentX = -1;
  let currentY = 0;
  
  while (n > 0) {
    // n의 값이 유효할 때까지 반복
    for (let i = 0; i < n; i++) {
      // 위에서 아래로 내려가는 대각선
      currentX++;
      count++;
      arr[currentX][currentY] = count;
      // console.log("첫번째 for문", count);
    }
    for (let i = 0; i < n - 1; i++) {
      // 왼쪽에서 오른쪽으로 이동
      currentY++;
      count++;
      arr[currentX][currentY] = count;
      // console.log("두번째 for문", count);
    }
    for (let i = 0; i < n - 2; i++) {
      // 아래에서 위로 내려가는 대각선
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
      // console.log("세번째 for문", count);
    }
    n -= 3;
  }

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
}


