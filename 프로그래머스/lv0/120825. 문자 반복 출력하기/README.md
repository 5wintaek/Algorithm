# [level 0] 문자 반복 출력하기 - 120825 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120825) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>my_string</code>과 정수 <code>n</code>이 매개변수로 주어질 때, <code>my_string</code>에 들어있는 각 문자를 <code>n</code>만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>my_string</code> 길이 ≤ 5</li>
<li>2 ≤ <code>n</code> ≤ 10</li>
<li>"my_string"은 영어 대소문자로 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"hello"</td>
<td>3</td>
<td>"hhheeellllllooo"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.</li>
</ul>

### 문제풀이
- (1) 문자열을 배열로 반환 -> spread syntax
- (2) 새로운 배열을 반환하기 위해 map 메서드 사용
- (3) repeadt 메서드를 사용하여 배열의 첫 번쨰 인덱스부터 n번씩 반복하여 새로운 배열 생성
- (4) join('') 을 사용하여 배열을 문자열로 다시 바꾸었다.

```js
function solution(my_string, n) {
    return [...my_string].map(a => a.repeat(n)).join('')
}
```

### 다른 문제풀이

- (1) split을 사용하여 문자열->배열로 변환
- (2) reduce를 사용하여 새로운 배열 형태를 반환
- (3) 마지막 '' 을 사용하지 않으면 reduce() 는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫번째 인덱스는 건너뛴다. -> 마지막 ''사용하지 않을경우 "heeellllllooo" 반환

```js
function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}
```

> 출처 : 블로그 , https://velog.io/@gagaeun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%B0%98%EB%B3%B5-%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0

> 출처 : 코어자바스크립트, https://ko.javascript.info/array-methods#ref-39

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
