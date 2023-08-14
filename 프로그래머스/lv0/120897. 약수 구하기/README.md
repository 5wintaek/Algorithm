# [level 0] 약수 구하기 - 120897 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120897) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>정수 <code>n</code>이 매개변수로 주어질 때, <code>n</code>의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 10,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>24</td>
<td>[1, 2, 3, 4, 6, 8, 12, 24]</td>
</tr>
<tr>
<td>29</td>
<td>[1, 29]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.</li>
</ul>


### 문제 풀이
(1) 약수는 나누어 떨어질 때 까지 찾는 수입니다.

(2) for문을 돌려야 합니다. 그래야 n숫자만큼 하나씩 숫자를 증가해 가면서 비교를 할 수 있으니 써줍니다.

(3) if문을 써서 n과 나눴을 때 나머지가 0이라면 answer에 push 를 해줍니다. push 를 해주는 이유는 배열이기 때문입니다.

```js
function solution(n) {
    let answer = [];
    // 약수는 나누어 떨어지는 수를 찾는것.
    for(let i=1; i<=n; i++){
        if(n % i === 0){
            answer.push(i)
        }
    }
   return answer

}
```




> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
