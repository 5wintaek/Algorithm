function solution(places) {
  const answer = [];
  Array.from(places, (oneRoom) => {
      const result = checkMT(oneRoom);
      answer.push(result);
    } 
  );
  return answer;
};

function checkMT(oneRoom) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let target = oneRoom[i][j];
      if (target === "P") {
        const dx = i
        const dy = j
        // 우측 검사
        const righkOne = dy + 1 < 5;
        const rightTwo = dy + 2 < 5;
        if (righkOne && oneRoom[i][dy + 1] === "P") return 0;
        if (rightTwo) {
          if (oneRoom[i][dy + 2] === "P"){
            if (oneRoom[i][dy + 1] !== "X") return 0;
          }
        }

        // 하단 검사
        const downone = dx + 1 < 5; 
        const downtwo = dx + 2 < 5;

        if (downone) {
          if (oneRoom[dx + 1][j] === "P") return 0;
        }
        if (downtwo && oneRoom[dx + 2][j] === "P" && oneRoom[dx+1][j] !== "X") return 0;

        // 우하단 검사
        const rightDown = dx + 1 < 5 && dy + 1 < 5;
        if (rightDown && oneRoom[dx+1][dy+1] === "P"){
          if (oneRoom[dx+1][dy] !== "X" || oneRoom[dx][dy+1] !== "X") return 0;
        }

        // 좌하단 검사
        const leftDown = dx + 1 < 5 && dy - 1 >= 0;
        if (leftDown && oneRoom[dx+1][dy-1] === "P") {
          if (oneRoom[dx][dy -1] !== "X" || oneRoom[dx+1][dy] !== "X") return 0;
        }
      }
    }
  }
  return 1;
}