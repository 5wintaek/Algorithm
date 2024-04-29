function solution(array, height) {
  // return array.filter(a => a > height).length;
  let count = 0;
  for(i of array){
      if(i > height){
          count ++
      }
  }
return count
}