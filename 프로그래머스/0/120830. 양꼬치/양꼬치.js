function solution(n, k) {
    if(n>=10){
        k-= parseInt(n/10)
        console.log(k)
    } 
    return 12000 * n + 2000 * k    
}

// k 양꼬치 : 12000
// n 음료수 : 2000
// 10인분을 먹으면 음료 + 1
// n이 만약 10 이상이면 n/10 을 해서 값을 구함
// 소수점이 찍히니 Math.floor를 사용 , parseInt 사용