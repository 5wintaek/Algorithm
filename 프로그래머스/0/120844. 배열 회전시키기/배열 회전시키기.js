function solution(numbers, direction) {
    if('right'==direction){
        numbers = [numbers.pop(),...numbers]
    } else{
        numbers = [...numbers.slice(1),numbers.shift()]
    }
    return numbers
}   
