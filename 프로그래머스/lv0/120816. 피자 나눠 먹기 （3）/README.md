# [level 0] 피자 나눠 먹기 (3) - 120816 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120816) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 <code>slice</code>와 피자를 먹는 사람의 수 <code>n</code>이 매개변수로 주어질 때, <code>n</code>명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>slice</code> ≤ 10</li>
<li>1 ≤ <code>n</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>slice</th>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>7</td>
<td>10</td>
<td>2</td>
</tr>
<tr>
<td>4</td>
<td>12</td>
<td>3</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>10명이 7조각으로 자른 피자를 한 조각 이상씩 먹으려면 최소 2판을 시켜야 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>12명이 4조각으로 자른 피자를 한 조각 이상씩 먹으려면 최소 3판을 시켜야 합니다.</li>
</ul>

### 문제 풀이
(1) 피자조각과 인원수대로 나누고 거기에 정수반환을 해주면 답이 반환되는줄 알았던 첫번쨰 풀이
```js
function solution(slice, n) {
  return parseInt(n/slice) + 1 
}
```
(2) 하지만 나누고 난 후 올림 처리를 해주어야 부족한 판 수를 채우기 때문에 첫번째 풀이는 적절치 않았고 두번쨰 풀이를 이용하였다.
때문에 Math.ceil 메서드를 이용하여 나눈값을 올림처리 하여서 문제를 풀하였다.

```js
function solution(slice, n) {
    return Math.ceil(n/slice) 
}
```

>출처: MDN , https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
