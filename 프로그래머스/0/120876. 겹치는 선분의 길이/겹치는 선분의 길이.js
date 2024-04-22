function solution(lines) {
  // -100<a<100 선분의 양 끝점을 0<ㅁ<200 으로 바꿈
  let line = new Array(200).fill(0);
  lines.forEach(([min, max]) => {
    for (; min < max; min++) {
      line[min+100]++;
    }
  });
  return line.filter((v) => v > 1).length
}