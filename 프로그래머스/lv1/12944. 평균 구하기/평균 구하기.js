function solution(arr) {
    let answer = 0;
    let sum = 0;
    let avarage = 0;
    
    for(let i=0; i<arr.length; i++){
        sum += arr[i]    
    }
    
    avarage = sum / arr.length
    return avarage
}


// 다른사람의 풀이
// function average(array){
//   return array.reduce((a,b) => a+b) / array.length;
// }