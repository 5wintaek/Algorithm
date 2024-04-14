function solution(score) {
  let total = score.map((v) => v[0] + v[1]);
  let sorted = total.slice().sort((a, b) => b - a);
  // console.log(total); // 150, 140, 110, 130
  // console.log(sorted); // 140, 140, 130, 110
  return total.map((v) => sorted.indexOf(v) + 1)
  // total : [150, 140, 110, 130]
  // sorted : [150, 140, 130, 110]
  // total에서 map을 돌려 sorted 값이 순서대로 [0,1,3,2]
  // +1을 해주면 [1,2,4,3]
}


