function solution(num, k) {
    const strNum = String(num)
    for(let i=0; i<strNum.length; i++){
        const item =strNum[i];
        if(item === String(k)){
            return i + 1;
            // 배열이 아닌 자리수를 return 하여서 +1
        }
    }
    return -1
}


// 1. num 에 있는 숫자 하나씩 꺼내기
// 2. k랑 같은 숫자가 있는 찾기