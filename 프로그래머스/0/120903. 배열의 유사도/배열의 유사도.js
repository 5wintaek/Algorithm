function solution(s1, s2) {
    return s1.length + s2.length - new Set([...s1,...s2]).size
    
}

// new Set()을 이용하여 문제풀이
// set는 중복된 데이터를 허용하지 않는다.
// 때문에 s1+s2 의 length 와 
// set.size 를 통해서 값을 구함
// 세트의 size 속성을 통해서 해당 세트의 길이, 즉 얼마나 많은 값이 저장되어 있는지를 알아낼 수 있다.

