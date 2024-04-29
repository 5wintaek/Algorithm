function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}

// slice는 새로운 배열을 반환함
// slice를 사용하지 않으면 원본 배열을 훼손
