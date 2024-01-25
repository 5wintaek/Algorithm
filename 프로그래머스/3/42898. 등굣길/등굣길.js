function solution(m, n, puddles) {
  const pool = [];
  for (let i = 1; i <= n; i++) pool.push(Array(m).fill(0));
  pool[0][0] = 1;
    
  // 물에 잠긴 지역 표시 잠긴 지역 표시
  puddles.forEach((e) => {
    let [x, y] = e;
    pool[y - 1][x - 1] = -1;
  });

  // 물에 잠긴 지역이 아닌 경우 갈 수 있는 경로의 수 계산
  // 바깥쪽 forEach : arr = 각 행에 대한 배열 , y는 행의 인덱스
  // 안쪽 forEach : e는 각 원소값 , x는 현재 열의 인덱스
  // e는 현재 위치의 값
  // (x > 0 && pool[y][x - 1] !== -1 ? pool[y][x - 1] : 0) -> 왼쪽에서 오는 경로의 수
  // y는 위쪽에서 오는 경로의 수
  pool.forEach((arr, y) => {
    arr.forEach((e, x) => {
      if (e !== -1) {
        let n = e + (x > 0 && pool[y][x - 1] !== -1 ? pool[y][x - 1] : 0) + (y > 0 && pool[y - 1][x] !== -1 ? pool[y - 1][x] : 0);
        n = n % 1000000007;
        pool[y][x] = n;
      }
    });
  });
  return pool[n - 1][m - 1] % 1000000007;
}