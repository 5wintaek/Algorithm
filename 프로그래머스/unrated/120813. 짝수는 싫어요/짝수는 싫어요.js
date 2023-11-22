function solution(n) {
    // 결과값이 배열이니 [] 생성
    const result = []; 
    // 순차적으로 반복해야하니 for문 작성
    for(let i=1; i<=n; i++){
        // 2로 나눴을때 나머지가 1이 나오면 홀수
        if(i%2 == 1){
            // 새로운 배열에 push 
            result.push(i)
        }
    }
    return result
}

// 재풀이