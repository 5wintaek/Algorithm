function solution(n) {
   return Array(n).fill().map((_,i)=> i+1).filter( v=> v % 2 ===0).reduce((a,c) => a+c,0)
}
    // reduce(a,c) 에서 a에는 초기값0이 들어가고 c 에는 배열 첫번째(2) 요소
    // 두번쨰에서는 a는 2, c에는 4 가 들어가고 a에는 6이 들어감
    // 세번째에서는 a는 6, c에는 6 이 들어가고 a에는 12 들어감
//    let answer = 0 
//    for(let i=0; i<=n; i++){
//        if(i%2 === 0) answer += i;
//    }
//     return answer
// }




