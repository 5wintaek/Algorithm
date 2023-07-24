function solution(my_string) {
    const answer = my_string.toLowerCase();
    const strArray = [...answer] //  spread연산자 사용 배열변경
    return strArray.sort().join('') // join('') 문자열로 변경 
}