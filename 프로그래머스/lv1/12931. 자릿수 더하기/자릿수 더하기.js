function solution(n)
{
    let answer = 0
    let number = String(n)
    // .length를 사용하기 위해선 숫자를 문자열로 바꿔야함 , String 을 쓴 이유
    for(let i=0; i<number.length; i++){
        answer += parseInt(number[i])
    }

    return answer;
}