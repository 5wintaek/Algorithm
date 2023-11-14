function solution(array) {
    array.sort((a,b) => a-b)
    return array[Math.floor(array.length/2)]
}

// 오름차순으로 배열 안에 숫자들을 정렬해준다.
// index의 중앙값을 구하기 위해 array.length/2 를 하였고
// index의 값을 정수로 뽑아내기 위해 Math.floor를 사용하였다.