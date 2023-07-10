function solution(quiz) {
    const answer = []
    for(let i=0; i<quiz.length; i++){
        const item = quiz[i]
        const itemArr = item.split(' ') // 공백
        const firstNum = Number(itemArr[0]) // 첫번째숫자 배열
        const op = itemArr[1] // 두번쨰 연산자
        const secondNum = Number(itemArr[2])
        const result = Number(itemArr[4]) // 결과값
        if(op === '+'){
            if(firstNum + secondNum === result){
                answer.push('O')
            }else{
                answer.push('X')
            }
        }else{
             if(firstNum - secondNum === result){
                answer.push('O')
            } else{
                answer.push('X')
        }
    } 
 }
    return answer
}