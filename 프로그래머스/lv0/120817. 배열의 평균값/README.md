# [level 0] 배열의 평균값 - 120817 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120817) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>정수 배열 <code>numbers</code>가 매개변수로 주어집니다. <code>numbers</code>의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 ≤ <code>numbers</code>의 원소 ≤ 1,000</li>
<li>1 ≤ <code>numbers</code>의 길이 ≤ 100</li>
<li>정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다. </li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</td>
<td>5.5</td>
</tr>
<tr>
<td>[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]</td>
<td>94.0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>numbers</code>의 원소들의 평균 값은 5.5입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>numbers</code>의 원소들의 평균 값은 94.0입니다.</li>
</ul>

### 문제풀이
배열을 기반으로 값을 하나로 내뱉을때는 reduce 를 사용합니다.
```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```
1. 함수 최초 실행시 reduce의 초기값 0이 sum에 들어가게 됩니다. current의 배열의 첫번쨰 요소가 들어오게 됩니다. 따라서 결과값은 1이 됩니다.
2. 두번째 실행시 결과값 1이 sum에 들어가게 됩니다. 두번쨰 요소 2가 들어가게 되면서 결과값은 3이 됩니다.
3. 누적된값과 배열에 차례대로 들어간 값들이 순차적으로 더해지면서 배열의 모든 값들을 내뱉게 됩니다.



> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
