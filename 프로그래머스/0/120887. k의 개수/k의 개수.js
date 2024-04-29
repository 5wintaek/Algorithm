function solution(i, j, k) {
    // i 부터 j까지 총 k가 몇번 등장하는지 return 
    return Array(j-i+1).fill(i).map((v,index)=>v+index).join("").split(k).length-1
}