function solution(num_list, n) {
    let answer = [];
    
    // while 이 8부터 시작해서 splice로 인해 뽑으면서 점점 없어지다가 0이되면 while문 종료
    while(num_list.length > 0) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));


