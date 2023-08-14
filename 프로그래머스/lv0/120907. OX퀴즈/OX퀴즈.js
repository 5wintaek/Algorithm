function solution(quiz) {
    const answer = []
    for(let i=0; i<quiz.length; i++){
       const item = quiz[i];
       const [firstNum, op, secondNum, _, result] = item.split(' ')
       .map((v, index)=>{
           if(index === 1){
               return v;
           }
           return Number(v);
       })
       
    const calcResult = op === '+' ? firstNum + secondNum : firstNum - secondNum;
        if(calcResult === result){
            answer.push('O')
        }else {
            answer.push('X')
        }
 }
    return answer
}