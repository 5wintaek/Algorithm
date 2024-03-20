function solution(numbers) {
   // 기본풀이
    //let reduce = numbers.reduce((sum,current)=>sum+current,0)
   //return reduce / numbers.length
    return numbers.reduce((sum,current) => sum + current,0) / numbers.length
}