function solution(n) {
   // return Array(n).fill().map((_,i)=> i+1).filter( v=> v % 2 ===0).reduce((a,c) => a+c,0)
    
    let answer = 0;
    for(let i=2; i<=n; i+=2){
        answer += i
        console.log(answer)
    }
    
    return answer
}




