function solution(numbers) {
   let reduce = numbers.reduce((sum,current)=>sum+current,0)
   return reduce / numbers.length
}