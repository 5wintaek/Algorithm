// M 은 몇번 더하는지, K 는 몇번 더할 수 있는지, N은 배열의 수
// N = 5 , M = 8 , K = 3 , arr = [2,4,5,4,6]
// 반복되는 수열을 파악해서 구해야함
// M/(K+1) * K : 수열의 반복되는 횟수 , K를 곱해주면 가장 큰 숫자가 등장하는 횟수
// M % (K+1) : M 이 K+1로 나누어 떨어지지 않을 때

const arr = input[1].split(" ").map(Number);
const [n, m, k] = input[0].split(" ").map(Number);

const data = arr.sort();
const fisrt = data[n - 1];
const second = data[n - 2];

let count = parseInt(m / (k + 1)) * k;
count += m % (k + 1);

let result = 0;
result += count * fisrt;
result += (m - count) * second;

console.log(result);
