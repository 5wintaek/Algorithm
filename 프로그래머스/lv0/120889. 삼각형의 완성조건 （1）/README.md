# [level 0] 삼각형의 완성조건 (1) - 120889 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120889) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.</p>

<ul>
<li>가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.</li>
</ul>

<p>삼각형의 세 변의 길이가 담긴 배열 <code>sides</code>이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>sides</code>의 원소는 자연수입니다.</li>
<li><code>sides</code>의 길이는 3입니다.</li>
<li>1 ≤ <code>sides</code>의 원소 ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>sides</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3]</td>
<td>2</td>
</tr>
<tr>
<td>[3, 6, 2]</td>
<td>2</td>
</tr>
<tr>
<td>[199, 72, 222]</td>
<td>1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>가장 큰 변인 3이 나머지 두 변의 합 3과 같으므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>가장 큰 변인 6이 나머지 두 변의 합 5보다 크므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>가장 큰 변인 222가 나머지 두 변의 합 271보다 작으므로 삼각형을 완성할 수 있습니다. 따라서 1을 return합니다.</li>
</ul>

### 문제풀이
-(1) 배열 안에 있는 요소들을 각각 오름차순으로 정렬을 해준다.
-(2) index요소들을 비교하여 풀이해준다.

```js
function solution(sides) {
    sides.sort((a,b)=>a-b);
    return (sides[0] + sides[1] > sides[2] ? 1 : 2 ) 
}
```

> 출처: 코어자바스크립트, https://ko.javascript.info/array-methods#ref-770

> 출처: 벨로그, https://velog.io/@csq1458/%EC%82%BC%EA%B0%81%ED%98%95%EC%9D%98-%EC%99%84%EC%84%B1%EC%A1%B0%EA%B1%B41

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
