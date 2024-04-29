function solution(n, k) {
      // 양꼬치 n인분, 음료수 k개
    if(n >= 10){
        k -= Math.floor(n/10)
    }
    console.log(k)
  
    return 12000 * n + 2000 * k
}