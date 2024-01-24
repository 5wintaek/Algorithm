function solution(triangle) {
    for (let i = triangle.length - 2; 0 <= i; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1])
        }
    }
    return triangle[0][0]
}
출처: https://allo-ew.tistory.com/120 [hon9g:티스토리]