# [level 0] 가장 큰 수 찾기 - 120899 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120899) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>정수 배열 <code>array</code>가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>array의</code> 길이 ≤ 100</li>
<li>0 ≤ <code>array</code> 원소 ≤ 1,000</li>
<li><code>array</code>에 중복된 숫자는 없습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>array</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 8, 3]</td>
<td>[8, 1]</td>
</tr>
<tr>
<td>[9, 10, 11, 8]</td>
<td>[11, 2]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.</li>
</ul>

### 문제 풀이

(1) 최댓값을 찾기 위해서 array 에서 Math.max 값을 써줍니다.

(2) arr.indexOf(item, from)는 인덱스 from부터 시작해 item(요소)을 찾습니다. 요소를 발견하면 해당 요소의 인덱스를 반환하고, 발견하지 못했으면 -1을 반환합니다.


```js
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}
```



### 다른 사람 문제 풀이

```js
function solution(array) {
    return [Math.max(...array), array.indexOf(Math.max(...array))]
}
```



> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
