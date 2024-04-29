const solution = (array) => {
  array.sort((a, b) => a - b); // 오름차순
  console.log(array); // [1,2,7,10,11]
  console.log(array.length);
  console.log(array.length / 2);
  return array[Math.floor(array.length / 2)];
};

console.log(solution([1, 7, 2, 11, 10]));


// 오름차순으로 배열 안에 숫자들을 정렬해준다.
// index의 중앙값을 구하기 위해 array.length/2 를 하였고
// index의 값을 정수로 뽑아내기 위해 Math.floor를 사용하였다.
// array[] 를 입혀줘야 array.length/2 의 인덱스 값을 뽑을 수 있어야 사용