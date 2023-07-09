# [level 0] n의 배수 고르기 - 120905 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120905) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>정수 <code>n</code>과 정수 배열 <code>numlist</code>가 매개변수로 주어질 때, <code>numlist</code>에서 <code>n</code>의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 10,000</li>
<li>1 ≤ <code>numlist</code>의 크기 ≤ 100</li>
<li>1 ≤ <code>numlist</code>의 원소 ≤ 100,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>numlist</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>[4, 5, 6, 7, 8, 9, 10, 11, 12]</td>
<td>[6, 9, 12]</td>
</tr>
<tr>
<td>5</td>
<td>[1, 9, 3, 10, 13, 5]</td>
<td>[10, 5]</td>
</tr>
<tr>
<td>12</td>
<td>[2, 100, 120, 600, 12, 12]</td>
<td>[120, 600, 12, 12]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>numlist</code>에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>numlist</code>에서 5의 배수만을 남긴 [10, 5]를 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li><code>numlist</code>에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.</li>
</ul>


### 문제 풀이
(1) 문제풀이 조건 중 배열을 return 을 해야하니 let answer = [] 를 해줍니다.

(2) numlist 중 n의 배수들을 남긴 값일 return을 해주어야 합니다. n % numlist === 0 이라면 n의 배수의 값이므로 미리 조건문에 사용해줍니다. 

(3) for문을 돌려 numlist.length 만큼 하나씩 배열들을 꺼내줍니다. 

(4) 꺼낸 배열들을 const item = numlist[i] 를 통해서 하나씩 꺼내어 조건문을 넣어 비교해줍니다.

(5) 문제풀이 (2) 에서 사용한 구조를 조건문에 넣어줍니다.

(6) 배열들을 차례대로 넣어야 하기 때문에 push 를 이용하여 answer에 값을 집어넣어줍니다.

```js
function solution(n, numlist) {
    let answer = []
    for(let i=0; i<numlist.length; i++){
        const item = numlist[i]
        if(item % n === 0){
            answer.push(item)
        }
    }
    return answer
}

// ex) : 10% 3 ! == 0 -> 10은 3의 배수가 아니다
```


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
