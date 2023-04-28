function solution(n) {
    // 인원수 a , 피자갯수b
    let a = n;
    let b = 6;

    // 최대공약수 만들기
    while(a % b !== 0){
        // 
        let r = a % b;
        
        if(r !== 0){
            a = b;
            b = r;
        }
    }
    
    // 최소공배수 = 두 자연수의 곱 / 최대공약수
    let min = (n * 6) / b;

    return min / 6;
}