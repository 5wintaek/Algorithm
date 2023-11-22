function solution(numbers) {
    let doubledMap = numbers.map(el => el*2);
    console.log(doubledMap)
    return doubledMap
}
// map은 배열 요소 전체를 대상으로 함수를 호출
// 함수 호출 결과를 배열로 반환

function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
// numbers를 spread연산자를 통해 차례대로 하나씩 풀어준다
// a에서 1,2,3,4,5 가 차례대로 들어간다
// b가 1부터 5까지 곱해줌